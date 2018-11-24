var gulp = require("gulp");
var responsive = require("gulp-responsive");
var clean = require("gulp-clean");

gulp.task("clean", function () {
  gulp.src("img/", {read: false})
  .pipe(clean())
});

gulp.task('images', ["clean"], function () {
  return gulp.src('img-src/**/*.{jpg,png}')
    .pipe(responsive({
      '*.jpg': [{
        width: 320,
        rename: {
          suffix: "_small_1x",
          extname: '.jpg'
        },
        format: 'jpeg'
      }, {
        width: 320 * 2,
        rename: {
          suffix: "_small_2x",
          extname: '.jpg'
        },
      }, {
        width: 480,
        rename: {
          suffix: "_medium_1x",
          extname: '.jpg'
        },
        format: 'jpeg'
      }, {
        width: 480 * 2,
        rename: {
          suffix: "_medium_2x",
          extname: '.jpg'
        },
      }, {
        width: 800,
        rename: {
          suffix: "_large_1x",
          extname: '.jpg'
        },
      }, {
        width: 800 * 2,
        rename: {
          suffix: "_large_2x",
          extname: '.jpg'
        },
        withoutEnlargement: true
      }]
    }, {
        quality: 80,
        progressive: false,
        withMetadata: true,
        errorOnEnlargement: false
      }))
    .pipe(gulp.dest('img/'));
});
