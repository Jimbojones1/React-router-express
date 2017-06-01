var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less')
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var watch       = require('gulp-watch');




//  first arguement is the files I want to watch, the second is the task to run
gulp.task('watch', function(){
  gulp.watch(['./clientReact/*.js'], ['react'])
  gulp.watch(['./server/public/styles/*.less'], ['compile-less']);
  // gulp.watch("./server/views/*.html").on('change', browserSync.reload);
})

// gulp.task('react', function(){
//   return browserify('./clientReact/app.js')
//           .transform('babelify', {presets: ["react"]})
//           .bundle()
//           .pipe(source('build.js'))
//           .pipe(gulp.dest('./public/javascripts'))
// })

gulp.task('react', function(){

  return browserify({
            entries: './clientReact/app.js',
            extensions: ['.js'],
            debug: true
          })
          .transform('babelify', {presets: ["react", "es2015"]})
          .bundle()
          .pipe(source('build.js'))
          .pipe(gulp.dest('./public/javascripts'))
})

gulp.task('compile-less', function(){
  gulp.src('./public/styles/main.less')
  .pipe(less())
  .pipe(gulp.dest('./public/styles'))});
  // .pipe(browserSync.reload({stream: true}));})


gulp.task('default', ['compile-less', 'react', 'watch'])
