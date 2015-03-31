var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var open = require('gulp-open');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

var port = process.env.port || 3012;

gulp.task('browserify', function () {
  gulp.src('public/js/main.js')
    .pipe(plumber())
    .pipe(browserify({
      debug: true,
      transform: ['babelify']
    }))
    .pipe(rename('main.js'))
    .pipe(gulp.dest('public/build'))
    .pipe(livereload());
});

gulp.task('compass', function() {
  gulp.src('./public/sass/main.scss')
    .pipe(plumber())
    .pipe(compass({
      css: 'public/css',
      sass: 'public/sass'
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

gulp.task('open', function(){
  var options = {
    url: 'http://localhost:' + port
  };

  gulp.src('index.html')
  .pipe(open('', options));
});

gulp.task('connect', function () {
  connect.server({
    hostname: 'localhost',
    port: port
  });
});

gulp.task('watch', function () {
  livereload.listen();

  //js
  watch(['public/js/**/*.js'], function(){
    gulp.start('browserify');
  });

  //scss
  watch('public/sass/**/*.scss', function(){
    gulp.start('compass');
  });

  //html
  watch(['index.html' ,'views/master.ejs']).on('change', function (file){
    livereload.changed(file);
  });

});

gulp.task('build', ['browserify', 'compass']);
gulp.task('serve', ['build', 'watch']);

gulp.task('default', ['build']);