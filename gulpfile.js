'use strict';

var gulp = require('gulp'),
    csscombLint = require('gulp-csscomb-lint');

gulp.task('lint', function() {
    return gulp.src(['style.css'])
        .pipe(csscombLint());
});