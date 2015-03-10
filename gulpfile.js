var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

// lint js using jshint
gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// combine and minify all js
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// compile stylus
gulp.task('styles', function() {
  gulp.src('./stylesheets/*.styl')
    .pipe(stylus())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./stylesheets'))
});

// compress resultant css
gulp.task('minify-css', function() {
  return gulp.src('./stylesheets/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./stylesheets/'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['jshint', 'scripts']);
    gulp.watch('stylesheets/*.styl', ['styles', 'minify-css']);
});

gulp.task('default', ['jshint', 'scripts', 'styles', 'minify-css']);
