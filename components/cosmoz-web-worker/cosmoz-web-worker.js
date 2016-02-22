/*global Blob, Polymer, Promise, Worker, window, XMLHttpRequest */
(function () {

	"use strict";

	Polymer({
		is: 'cosmoz-web-worker',
		properties: {
			/**
			 * Number of workers to create for round robin distribution of work
			 * @type Number
			 */
			numThreads: {
				type: Number,
				value: 2
			},
			_callbacks: {
				type: Object,
				value: function () {
					return {};
				}
			},
			_currentThreadIndex: {
				type: Number,
				value: 0
			},
			_threads: {
				type: Array,
				value: function () {
					return [];
				}
			},
			_workerRun: {
				type: Number,
				value: 0
			}
		},
		/**
		 * The process method will relay data to the available worker thread
		 * @param  {Mixed} data The data for the worker
		 * @param  {Function} callback (optional) Callback to run for the response
		 */
		process: function (data, callback) {
			this._workerRun += 1;
			if (callback !== undefined) {
				this._callbacks[this._workerRun] = callback;
			}
			this._threads[this._currentThreadIndex].postMessage({
				workerRun: this._workerRun,
				data: data
			});
			if (this._currentThreadIndex + 1 < this.numThreads) {
				this._currentThreadIndex += 1;
			} else if (this._currentThreadIndex > 0) {
				this._currentThreadIndex  = 0;
			}
		},
		ready: function () {
			var
				ctx = this,
				workerScripts = this._getWorkerScripts(),
				promises = this._getWorkerScriptInlinePromises(workerScripts) || [];

			Promise.all(promises)
				.catch(function (err) {
					console.warn('err', err);
				})
				.then(function () {
					ctx._startWorkers(workerScripts);
				});
		},
		// TODO: Use HTML Imports instead?
		_getWorkerScriptInlinePromise: function (script) {
			var url = script.getAttribute('src');

			return new Promise(function (resolve, reject) {
				var req = new XMLHttpRequest();

				req.open('GET', url);

				req.onload = function() {
					if (req.status === 200) {
						script.textContent = req.response + script.textContent;
						script.removeAttribute('src');
						resolve(req.response);
					} else {
						reject(new Error(req.statusText));
					}
				};

				req.onerror = function() {
					reject(new Error("Network Error"));
				};

				req.send();
			});
		},
		_getWorkerScriptInlinePromises: function (workerScripts) {
			var
				ctx = this,
				promises = [];

			workerScripts.forEach(function (script) {
				if (script.hasAttribute('src')) {
					promises.push(ctx._getWorkerScriptInlinePromise(script));
				}
			});

			return promises;
		},
		_getWorkerScripts: function () {
			var workerScriptType = 'script[type="text/worker"]';
			return Polymer.dom(this).querySelectorAll(workerScriptType);
		},
		_handleWorkerMessage: function (event) {
			var data = event.data.data,
				workerRun = event.data.workerRun,
				callback = this._callbacks[workerRun];

			if (callback) {
				callback(data);
				delete this._callbacks[workerRun];
			}

			this.fire('message', data);
		},
		_startWorkers: function (workerScripts) {
			var i = 0,
				jsMimeType = { type: "text/javascript" },
				workerCodeExtractor = function (oScript) { return oScript.textContent; },
				workerCode = Array.prototype.map.call(workerScripts, workerCodeExtractor),
				workerMessageHandler = this._handleWorkerMessage.bind(this),
				blob = new Blob(workerCode, jsMimeType),
				objectUrl = window.URL.createObjectURL(blob),
				worker;

			for (i = 0; i < this.numThreads; i += 1) {
				worker = new Worker(objectUrl);
				worker.addEventListener('message', workerMessageHandler);
				this._threads.push(worker);
			}

			this.fire('cosmoz-web-worker-ready');
		}
	});
}());