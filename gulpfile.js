'use strict';

// Include Gulp & tools we'll use
var fs = require('fs'),
	gulp = require('gulp'),
	path = require('path'),
	exec = require('child_process').exec;

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
							exec('git status --porcelain', {
								cwd: resolvedPath
							}, function (err, stdout, stderr) {
								if (err) {
									console.error("Gah error! ", err);
									return;
								}
								var cmd = 'git pull',
									needs_stash = stdout.length > 0;
								if (needs_stash) {
									cmd = 'git stash;' + cmd + ';git stash pop';
								}
								exec(cmd, {
									cwd: resolvedPath
								}, function (err, stdout, stderr) {
									console.log(resolvedPath, 'pull done!');
									if (err) {
										console.error("Gah error! ", err, stdout, stderr);
										return;
									}
								});
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