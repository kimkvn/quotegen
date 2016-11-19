// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
//
// gulp.task('browserSync', function(){
//   browserSync.init({
//     server:{
//       baseDir: "app"
//     }
//   })
// });
//
// // gulp.task('sass', function(){
// //   return gulp.src('app/scss/styles.scss')
// //     .pipe(sass()) //using gulp sass
// //     .pipe(gulp.dest('dist/styles'))
// //     .pipe(browserSync.reload({
// //       stream: true
// //     }))
// // });
//
// gulp.task('watch', ['browserSync'], function(){
//   //gulp.watch('app/scss/*.scss', ['sass']);
//   gulp.watch('*.html', browserSync.reload);
//   //gulp.watch('app/*.js', browserSync.reload);
//   //repeat above line for other watchers!
// });
//
// gulp.task('default', ['browserSync', 'sass', 'watch']);


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) //using gulp sass
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/styles.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('app/**/*.js', browserSync.reload);
  // repeat above line for other watchers!
});

gulp.task('default', ['browserSync', 'sass', 'watch' ]);
