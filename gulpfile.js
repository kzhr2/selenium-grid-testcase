// dependencies
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');

// task (test src pipe to mocha)
gulp.task('integration', () => {
  return gulp.src('test/*.js', { read: false })
    .pipe(mocha()).pipe(plumber());
});

// task (execute test and post process)
gulp.task('test', ['integration'], () => {
  selenium.child.kill();
});
