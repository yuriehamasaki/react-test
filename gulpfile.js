var gulp        = require('gulp'),
    react       = require('gulp-react'),
    plumber     = require('gulp-plumber'),
    uglify      = require("gulp-uglify"),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream'),
    compass     = require('gulp-compass'),
    sass        = require("gulp-sass"),
    browserSync = require('browser-sync');
 
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

// watch 
gulp.task('watch',function(){
    gulp.watch('./js/main.js', ['browserify']);
});

gulp.task('compass',function(){
    return gulp.src('sass/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb'
        }));
});

/*gulp.task('sass', function(){
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});*/


// gulp.task('watch',function(){
//     gulp.watch(['**/*.+(html|inc|css|png|jpg|gif)','js/**/*.js'],function(){
//         browserSync.reload();
//     });
//     gulp.watch('sass/**/*.scss',['compass']);
// });
 
gulp.task("default",['watch', 'browserSync']);










