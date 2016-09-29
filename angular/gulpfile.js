var argv        = require('yargs').argv;
var bower       = require('bower');
var browserSync = require('browser-sync').create();
var bump        = require('gulp-bump');
var cache       = require('gulp-cache');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var filter      = require('gulp-filter');
var flatten     = require('gulp-flatten');
var fs          = require('fs');
var git         = require('gulp-git');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var jshint      = require('gulp-jshint');
var minifyCss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');
var tag_version = require('gulp-tag-version');
var uglify      = require('gulp-uglify');

function getPackageJson () {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

function inc(importance) {
    // get all the files to bump version in
    return gulp.src(['./package.json', './bower.json'])
        // bump the version number in those files
        .pipe(bump({type: importance}))
        // save it back to filesystem
        .pipe(gulp.dest('./'))
        // commit the changed version number
        .pipe(git.commit('[Auto-Generated]: bump package version'))

        // read only one file to get the version number
        .pipe(filter('package.json'))
        // **tag it in the repository**
        .pipe(tag_version());
}

var paths = {
  
  sass: ['./assets/scss/**/*.scss'],

  app_js: [
    './assets/app/app.js',
    './assets/app/controllers.js',
    './assets/app/directives.js',
    './assets/app/factories.js',
    './assets/app/filters.js',
    './assets/app/services.js',
    './assets/app/factories/*.js',
    './assets/app/interceptors/*.js',
    './assets/app/filters/*.js',
    './assets/app/services/*.js',
    './assets/front/**/*.js'
  ],
  bower_js: [
    './assets/lib/bower/angular/angular.js',
    './assets/lib/bower/ng-error/ng-error.js',
    './assets/lib/bower/angular-ui-router/release/angular-ui-router.min.js'
  ],

  app_templates_watch: [
    './assets/front/directives/**/*.html',
    './assets/front/**/*.html'
  ],
  app_templates_dest: [
    { template: './assets/front/directives/**/*.html', dest: './public/directives/partials' },
    { template: './assets/front/**/*.html', dest: './public/partials' },
    { template: './assets/main.html', dest: './public' }
  ]
};

gulp.task('clearCache', function() {
  // Still pass the files to clear cache for
  gulp.src('./lib/*.js')
    .pipe(cache.clear());

  // Or, just call this for everything
  cache.clearAll();
});


gulp.task('push-origin', function() {

  if (argv.patch) {
    inc('patch');
  } else if (argv.minor) {
    inc('minor');
  } else if (argv.major) {
    inc('major');
  } else {
    inc('patch');
  }

  git.pull('origin', 'master', {}, function (err, stdout) {

    if (err) throw err;

    git.push('origin', argv.branch, {args: " -f"}, function (err, stdout) {
      if (err) throw err;
      // git.exec({args : 'request-pull v' + getPackageJson().version + ' origin ' + argv.branch }, function (err, stdout) {
      //   console.log("request pull result", err, stdout);
      //   if (err) throw err;
      // });
    });
  });
});

gulp.task('feature', function() { return inc('minor'); });
gulp.task('release', function() { return inc('major'); });

gulp.task('handle-app-js', function(done) {
  gulp.src(paths.app_js)
    .pipe(concat('comapp.js'))
    .pipe(gulp.dest('./public/')) // dev result
    .pipe(uglify().on('error', gutil.log))
    .pipe(rename('comapp.min.js'))
    .pipe(gulp.dest('./public/'))
    .on('end', done); // prod result
});

gulp.task('handle-bower-js', function(done) {
  gulp.src(paths.bower_js)
    .pipe(concat('addons.js'))
    .pipe(gulp.dest('./public/')) // dev result
    .pipe(uglify().on('error', gutil.log))
    .pipe(rename('addons.min.js'))
    .pipe(gulp.dest('./public/'))
    .on('end', done); // prod result
});

gulp.task('copy-assets', function() {
  for (var i = 0; i < paths.app_templates_dest.length; i++) {
    gulp.src(paths.app_templates_dest[i].template)
      .pipe(flatten())
      .pipe(gulp.dest(paths.app_templates_dest[i].dest));
  }

  gulp.src('./assets/img/**/*')
    .pipe(gulp.dest('./public/img/'));

  gulp.src('./assets/favicons/**/*')
    .pipe(gulp.dest('./public/'));

  gulp.src('./assets/fonts/**/*')
    .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('clean:all', function(callback) {
  return gulp.src('./public', {read: false})
    .pipe(clean({force: true}));

  // del(['./public/'], callback);
});

gulp.task('clean:css', function(callback) {
  return gulp.src(['./public/comapp.css', './public/comapp.min.css'], {read: false})
    .pipe(clean());

  // del(['./public/comapp.css', './public/comapp.min.css'], callback);
});

gulp.task('sass', ['clean:css'], function(done) {
  gulp.src('./assets/scss/app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./public/'))
    .on('end', done);
});

gulp.task('jshint', function() {
  return gulp.src([
      './assets/app/app.js',
      './routes/*.js',
      './helpers/*.js',
      './models/*.js',
      './api.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(paths.app_templates_watch, ['copy-assets', 'bs-reload']);
  gulp.watch(paths.app_js, ['handle-app-js', 'bs-reload']);
  gulp.watch(paths.sass, ['sass', 'bs-reload']);
});

gulp.task('browser-sync', function() {
  browserSync.init({
    ghostMode: false  // do not mirror clicks, scrolls & form inputs in all browsers
  });
  browserSync.notify('Initiated with BrowserSync.');
});

gulp.task('bs-reload', function () {
  browserSync.reload();
  browserSync.notify('Reloaded page');
});

gulp.task('default', function(callback) {
  runSequence('clean:all', 'jshint',
      ['handle-app-js', 'handle-bower-js', 'sass'],
      'copy-assets', 'browser-sync', 'watch',
      callback);
});

/*
 * For Wercker integration, eventually.
  gulp.task('wercker', function(callback) {
    runSequence('clean:all', 'jshint',
        ['handle-app-js', 'handle-bower-js', 'sass'],
        'copy-assets',
        callback);
  });
 *
 */