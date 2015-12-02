'use strict';

// Include Gulp & tools we'll use
var fs = require('fs'),
	gulp = require('gulp'),
	path = require('path'),
	exec = require('child_process').exec,
	gitRun = function (cmd, cwd, callback) {
		exec(cmd, {
			cwd: cwd
		}, function (err, stdout, stderr) {
			if (err) {
				console.error("Gah error! ", err, stdout, stderr);
				return;
			}
			callback(stdout);
		});
	};

gulp.task('update', function () {
	fs.readdir('bower_components', function (err, bower_dirs) {
		if (err) {
			console.error("Gah error! ", err);
			return;
		}
		bower_dirs.forEach(function (bower_dir) {
			if (bower_dir.indexOf('cosmoz-') === 0) {
				var repo = 'bower_components' + path.sep + bower_dir;
				fs.lstat(repo, function (err, stats) {
					if (stats.isSymbolicLink()) {
						fs.realpath(repo, function (err, resolvedPath) {
							if (err) {
								console.error("Gah error! ", err, resolvedPath);
								return;
							}
							console.log('repo needs git pull:' + resolvedPath);
							gitRun('git status --porcelain', resolvedPath, function (output) {
								var needs_stash = output.length > 0;
								if (needs_stash) {
									gitRun('git stash', resolvedPath, function (output) {
										gitRun('git pull', resolvedPath, function (output) {
											gitRun('git stash pop', resolvedPath, function (output) {
												console.log('stash pull stash done');
											});
										});
									});
								} else {
									gitRun('git pull', resolvedPath, function (output) {
										console.log('pull done');
									});
								}
							});
						});
					}
				});
			}
		});
	});
});

// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (ignore) {}