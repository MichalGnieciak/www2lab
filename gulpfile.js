const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    src('scss/index.scss')
        .pipe(sass())
        .pipe(dest('css/'));
}

function watchTask() {
    watch(['scss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);