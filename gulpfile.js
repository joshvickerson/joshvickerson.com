var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

var paths = {
  jsLib: mainBowerFiles(),
  jsApp: ['js/**/*.js', '!js/**/*.min.js']
}

var jsAll = paths.jsLib.concat(paths.jsApp);

// lint js using jshint
gulp.task('jshint', function() {
    return gulp.src(paths.jsApp)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// combine and minify all js
gulp.task('scripts', ['jshint'], function() {
    return gulp.src(jsAll)
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
