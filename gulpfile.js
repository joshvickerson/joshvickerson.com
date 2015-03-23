var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');

// lint js using jshint
gulp.task('jshint', function() {
    return gulp.src(['js/*.js', '!js/all.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// combine and minify all js
gulp.task('scripts', ['jshint'], function() {
    return gulp.src(['js/**/*.js', '!js/**/*.min.js'])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
});

// compile stylus
gulp.task('styles', function() {
  gulp.src('./stylesheets/*.styl')
    .pipe(stylus())
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./stylesheets'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('stylesheets/*.styl', ['styles']);
});

gulp.task('default', ['jshint', 'scripts', 'styles']);
