var gulp = require('gulp');
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var mocha = require('gulp-mocha');

gulp.task('scripts', function() {
  browserify('src/browser/client.js', {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', function(err){console.log(err);})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/build'));
});

gulp.task('watch', function() {
  gulp.watch(['src/browser/**/*.js','src/browser/**/*.jsx'],['scripts','reload']);
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./public/"
    }
  });
});

gulp.task('test', function() {
  return gulp.src('test/**/*.js', {read: false})
    .pipe(mocha());
});

gulp.task('default',['scripts', 'watch', 'serve']);
