var gulp        = require('gulp');
var react       = require('gulp-react');
var plumber     = require('gulp-plumber');
var uglify      = require("gulp-uglify");
var browserify  = require('browserify');
var babelify    = require('babelify');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');
var compass     = require('gulp-compass');
var sass        = require("gulp-sass");
var browserSync = require('browser-sync');
 
// トランスパイル
gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./js/main.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('browserSync',function(){
    browserSync({
        proxy: 'http://react-test/'
    });
});

gulp.task('watch',function(){
    gulp.watch('./js/main.js', ['browserify']);
});

gulp.task('compass',function(){
    return gulp.src('sass/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb'
        }));
});

gulp.task("default",['watch', 'browserSync']);










