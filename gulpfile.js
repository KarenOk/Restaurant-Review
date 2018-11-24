var gulp = require("gulp");
var responsive = require("gulp-responsive");

gulp.task('processImages', function () {
  return gulp.src('img-src/**/*.{jpg,png}')
    .pipe(responsive({
      '*.jpg': [{
        width: 300,
        rename: {
          suffix: '-300px',
          extname: '.jpg'
        },
        format: 'jpeg'
      }, {
        width: 600,
        rename: {
          suffix: '-600px',
          extname: '.jpg'
        }
      }, {
        width: 1900,
        rename: {
          suffix: '-1900px',
          extname: '.jpg'
        },
        withoutEnlargement: true
      }, {
        // Convert images to the webp format
        width: 630,
        rename: {
          suffix: '-630px',
          extname: '.webp'
        }
      }]
    }, {
      // Global configuration for all images
      quality: 80,
      progressive: false,
      withMetadata: true,
      errorOnEnlargement: false
    }))
    .pipe(gulp.dest('img/'));
});