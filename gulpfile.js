var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

console.log('Gulp is loaded, read to run tasks.');

var settings = {
  scriptsFolder: 'scripts/',
  distFolder: 'dist/'
};

watch([settings.scriptsFolder + 'app/*.js'], function() {
  console.log('scripts changed');
  gulp.start('default');
});


gulp.task('default', function() {
  return gulp.src([settings.scriptsFolder + 'lib/jquery.js', settings.scriptsFolder + 'app/*.js'])
  .pipe(concat('distribution-app.js'))
  .pipe(uglify()) // Comment out uglify for developement / debugging
  .pipe(gulp.dest(settings.distFolder));
});
