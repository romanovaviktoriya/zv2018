'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const del = require('del');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const cssnano = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
const csso = require('gulp-csso');  //для минификации CSS
//const uncss = require('gulp-uncss');    //для оптимизации CSS файлов, анализирует HTML код и находит все неиспользуемые и продублированные стили
const concat = require('gulp-concat'); // Подключаем gulp-concat (для конкатенации файлов)
const combiner = require('stream-combiner2').obj;
const uglify = require('gulp-uglify');

const changed = require('gulp-changed');


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', function() {

    return combiner(
        gulp.src(['frontend/styles/normalize.css','frontend/styles/fonts.css','frontend/styles/main.scss']),
        gulpIf(isDevelopment, sourcemaps.init()),
        //less(),
        scss(),
        autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }),
        //cssnano(),    //минимизируем
        concat('main.min.css'), // Собираем их в кучу в новом файле main.min.css
        // uncss({
        //     html: ['index.html']
        // }),
        csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public/css')
    ).on('error', notify.onError());

});

gulp.task('librarys', function() {

    return combiner(
        gulp.src(['frontend/styles/lib/*.*']),
        gulpIf(isDevelopment, sourcemaps.init()),
        cssnano(),    //минимизируем
        concat('lib.min.css'), // Собираем их в кучу в новом файле lib.min.js
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public/css')
    ).on('error', notify.onError());

});

gulp.task('scripts', function() {

    return combiner(
        gulp.src(['frontend/assets/js/**']),
        gulpIf(isDevelopment, sourcemaps.init()),
        // uglify(),  //минимизируем
        // concat('lib.min.js'), // Собираем их в кучу в новом файле lib.min.js
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public/js')
    ).on('error', notify.onError());

});

gulp.task('clean', function() {
    return del('public');
});

gulp.task('assets', function() {
    return combiner(
        gulp.src(['frontend/assets/**']),
        gulp.dest('public')
    ).on('error', notify.onError());
});

gulp.task('img', function() {
    return combiner(
        gulp.src(['frontend/assets/img/*.*']),
        changed(['public/img']),
        gulp.dest('public/img')
    ).on('error', notify.onError());
});

gulp.task('fonts', function() {
    return combiner(
        gulp.src(['frontend/assets/fonts/**']),
        gulp.dest('public/fonts')
    ).on('error', notify.onError());
});

gulp.task('html', function() {
    return combiner(
        gulp.src(['frontend/assets/*.html']),
        gulp.dest('public')
    ).on('error', notify.onError());
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('styles', 'librarys', 'assets',  'scripts'))
);

gulp.task('watch', function() {
    gulp.watch('frontend/styles/*.*', gulp.series('styles'));

    gulp.watch('frontend/styles/lib/*.*', gulp.series('librarys'));

    gulp.watch('frontend/assets/img/*.*', gulp.series('img'));

    gulp.watch('frontend/assets/fonts/**', gulp.series('fonts'));

    gulp.watch('frontend/assets/js/**', gulp.series('scripts'));

    gulp.watch('frontend/assets/*.html', gulp.series('html'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'public',
        browser: 'chrome.exe'
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);

gulp.task('default',
    gulp.series(gulp.parallel('watch', 'serve'))
);