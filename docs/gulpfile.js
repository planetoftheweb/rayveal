var gulp = require('gulp'),
  webserver = require('gulp-server-io'),
  source = './',
  dest = './';

function html() {
  return gulp.src(dest + '**/*.html');
}

function js() {
  return gulp.src(dest + '**/*.js');
}

function styles() {
  return gulp.src(dest + '**/*.css');
}

function watch() {
  gulp.watch(source, js);
  gulp.watch(source, styles);
  gulp.watch(source, html);
}

function server() {
  return gulp.src(dest).pipe(
    webserver({
      serverReload: {
        dir: dest,
        callback: function() {}
      },
      port: 3333,
      open: true
    })
  );
}

var build = gulp.series(
  gulp.parallel(js, styles, html),
  server,
  watch
);

gulp.task('default', build);
