const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const concat = require('gulp-concat');

const paths = {
    images: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest('./build/css'));
}

function javascript() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'));
}

function watchFiles() {
    watch(paths.scss, css);
    watch(paths.js, javascript)
}

exports.css = css;
exports.watchFiles = watchFiles;

exports.default = series(css, javascript, watchFiles);