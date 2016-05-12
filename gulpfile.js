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
    cssmin = require('gulp-cssmin'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    ghPages = require('gulp-gh-pages');

    // templateCache = require('gulp-angular-templatecache');




//calling scripts
//plumber should be the very first thing you should pipe in
//if you cause an error it will not kick you out
// gulp.task('scripts', function(){
//   gulp.src(['app/scripts/**/*.js', '!app/**/*.min.js'])
//   .pipe(gulp.dest("dist/scripts/"))
// });

//minifies css!
gulp.task('css', function(){
  gulp.src('app/css/main.css')
  .pipe(plumber())
  .pipe(cssmin())
  .pipe(rename({suffix:'.min'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css/'))
  .pipe(gulp.dest('dist/css/'))
  .pipe(reload({stream: true}));
  return gutil.log('css is uglified');
});

//
// gulp.task('useref', function(){
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.min.js', uglify()))
//     .pipe(gulp.dest('dist/'));
// });


// gulp.task('templates', function () {
//   return gulp.src('app/templates/*.html')
//     .pipe(templateCache())
//     .pipe(gulp.dest('dist/templates/'));
// });

//creating a html tasks, watching it!
gulp.task('html', function(){
  gulp.src('app/**/*.html');
});

//creating the browser-sync tasks
//your reload is always the last thing that you pipe
gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: "app"
    }
  });
});

//creating a watch task
gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('app/scripts/**/*.js', browserSync.reload);
  gulp.watch('app/css/*.css', ['css']);
  gulp.watch('app/*.html', ['html']);
});


//BUILD tasks HERE
//clear out all the files/ folders in the build folders
gulp.task('build:cleanfolder', function (cb) {
	return del([
		'dist/**'
	], cb);
});

gulp.task('deploy', function () {
  return gulp.src("dist/**/*")
    .pipe(ghPages());
});

//Tasks to build a directory for all files
gulp.task('build:copy', ['build:cleanfolder'], function(){
    return gulp.src('app/**/*/')
    .pipe(gulp.dest('dist/'));
});
//remove unwanted build files
//list all the files and directiories here that you don't want to use
gulp.task('build:remove', ['build:copy'], function(cb){
  del([
    'dist/css/!(*.min.css)'
  ], cb);
});



//creating the browser-sync tasks
//your reload is always the last thing that you pipe
gulp.task('build:serve', function(){
  browserSync({
    server: {
      baseDir: "dist/"
    }
  });
});

gulp.task('build', ['build:copy', 'build:remove']);


// create a default task and just log a message
gulp.task('default', ['css', 'html', 'browser-sync', 'watch'],  function() {
  return gutil.log('Gulp is running!');
});
