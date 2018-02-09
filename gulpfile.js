'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-dinero');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
