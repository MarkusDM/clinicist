const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const watch = require('gulp-watch')

function styles() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
}

function watcher() {
  gulp.watch('./scss/**/*.scss', styles)
}

exports.watcher = watcher
