var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');
var inject = require('gulp-inject');
var del = require('del');

var paths = ['js/app/**/*.js', '!js/all.min.js'];

// combine and minify all js
gulp.task('scripts', function() {
    del('js/all.min.js');
    return gulp.src(paths)
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

gulp.task('inject', ['scripts'], function() {
  gulp.src('./index.html')
    .pipe(inject(gulp.src('js/all.min.js'), { read: false,
      transform: function (filepath, file, i, length) {
          return '<script src="' + filepath + '" async></script>';
      }}))
    .pipe(gulp.dest('./'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('stylesheets/*.styl', ['styles']);
});

gulp.task('default', ['inject', 'styles']);
