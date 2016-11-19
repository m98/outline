

const gulp = require('gulp');
gulp.task('default', function() {
  // place code for your default task here
});


const babel = require('gulp-babel'); 
gulp.task('babel', () => {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/babel'));
});



var rjs = require('gulp-requirejs');
gulp.task('requirejsBuild', function() {
    return rjs({
        baseUrl: 'dist/babel/app.js',
        out: 'test.js',
        shim: {
            // standard require.js shim options 
        },
        // ... more require.js options 
    })
        .pipe(gulp.dest('dist/')); // pipe it to the output DIR 
});