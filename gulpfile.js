//required plugins
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    cssmin = require('gulp-cssmin');



//calling scripts
//plumber should be the very first thing you should pipe in
//if you cause an error it will not kick you out
gulp.task('scripts', function(){
  gulp.src(['scripts/**/*.js']);
});

//minifies css!
gulp.task('css', function(){
  gulp.src('css/main.css')
  .pipe(plumber())
  .pipe(cssmin())
  .pipe(rename({suffix:'.min'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('css'))
  .pipe(reload({stream: true}));
  return gutil.log('css is uglified');
});

//creating a html tasks, watching it!
gulp.task('html', function(){
  gulp.src('*.html');
});

//creating the browser-sync tasks
//your reload is always the last thing that you pipe
gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: "."
    }
  });
});

//creating a watch task
gulp.task('watch', function(){
  gulp.watch('scripts/**/*.js', ['scripts']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('*.html', ['html']);
});


// gulp.task('deploy', function () {
//   return gulp.src("./dist/**/*")
//     .pipe(deploy());
// });
// create a default task and just log a message
gulp.task('default', ['scripts','css', 'html', 'browser-sync', 'watch'],  function() {
  return gutil.log('Gulp is running!');
});
