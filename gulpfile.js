/*global require*/
'use strict';

// Include Gulp & tools we'll use
var fs = require('fs'),
	gulp = require('gulp'),
	path = require('path'),
	exec = require('child_process').exec,
	gitRun = function (cmd, cwd, callback) {
		exec(cmd, {
			cwd,
		}, (err, stdout, stderr) => {
			if (err) {
				console.error('Gah error! ', err, stdout, stderr);
				return;
			}
			callback(stdout);
		});
	};

gulp.task('update', () => {
	fs.readdir('bower_components', (err, bowerDirs) => {
		if (err) {
			console.error('Gah error! ', err);
			return;
		}
		bowerDirs.forEach(bowerDir => {
			if (bowerDir.indexOf('cosmoz-') === 0) {
				var repo = 'bower_components' + path.sep + bowerDir;
				fs.lstat(repo, (err, stats) => {
					if (stats.isSymbolicLink()) {
						fs.realpath(repo, (err, resolvedPath) => {
							if (err) {
								console.error('Gah error! ', err, resolvedPath);
								return;
							}
							console.log('repo needs git pull:' + resolvedPath);
							gitRun('git status --porcelain', resolvedPath, output => {
								var needsStash = output.length > 0;
								if (needsStash) {
									gitRun('git stash', resolvedPath, () => {
										gitRun('git pull', resolvedPath, () => {
											gitRun('git stash pop', resolvedPath, () => {
												console.log('stash pull stash done');
											});
										});
									});
								} else {
									gitRun('git pull', resolvedPath, () => {
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
try {
	require('require-dir')('tasks');
} catch (ignore) {
	//
}
