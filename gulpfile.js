const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const clean = () => {
    return del(['dist'])
}

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('dist'))
}

const stylesDev = () => {
    return src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', notify.onError()))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

const stylesBuild = () => {
    return src('src/scss/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', notify.onError()))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(dest('dist/css'))
}

const htmlMinifyDev = () => {
    return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinifyBuild = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
}

const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/img'))
}

const scriptsDev = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

const scriptsBuild = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true
    }).on('error', notify.onError()))
    .pipe(dest('dist/js'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
        'src/img/**/*.webp'
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

watch('src/**/*.html', htmlMinifyDev)
watch('src/scss/**/*.scss', stylesDev)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scriptsDev)
watch('src/resources/**', resources)

exports.styles = stylesDev
exports.scripts = scriptsDev
exports.htmlMinify = htmlMinifyDev

exports.dev = series(clean, resources, htmlMinifyDev, scriptsDev, stylesDev, images, svgSprites, watchFiles)
exports.build = series(clean, resources, htmlMinifyBuild, scriptsBuild, stylesBuild, images, svgSprites)