

const gulp = require('gulp');
gulp.task('default', function() {
  // place code for your default task here
});


const babel = require('gulp-babel'); 
gulp.task('babel', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/babel'));
});


var webpack = require('gulp-webpack');
gulp.task('webpack', function() {
  return gulp.src('dist/babel/main.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});