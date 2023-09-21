const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const minifycss = require('gulp-minify-css')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

const outputDir = 'dist'

gulp.task('clean:dist', done => del([`${outputDir}/*`], done))

gulp.task('build:SLSAll', () => gulp.src('src/index.scss')
  .pipe(sass.sync({outputStyle: 'compact'}).on('error', sass.logError))
  .pipe(autoprefixer('last 2 version'))
  .pipe(rename({basename: 'sls_all'}))
  .pipe(gulp.dest(outputDir))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest(outputDir))
)


gulp.task('build:SLSLib', () => gulp.src('src/library/*.scss')
  .pipe(sass.sync({outputStyle: 'compact'}).on('error', sass.logError))
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest(outputDir))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest(outputDir))
)

gulp.task('build:SLSDev', () => gulp.src('src/**/*.scss')
  .pipe(gulp.dest(outputDir + '/sls_dev'))
)

gulp.task('default', gulp.series('clean:dist', 'build:SLSLib', 'build:SLSAll', 'build:SLSDev'))
