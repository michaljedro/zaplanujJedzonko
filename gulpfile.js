// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
var { src, dest, watch, series, parallel } = require("gulp");
// Importing all the Gulp-related packages we want to use
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var replace = require("gulp-replace");
var browserSync = require("browser-sync");
var server = browserSync.create();

// File paths
var files = {
  scssPath: "app/scss/**/*.scss",
  jsPath: "app/js/**/*.js",
  htmlPath: "**/*.html",
};

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
    .pipe(dest("dist"))
    .pipe(browserSync.stream()); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
  return src([
    files.jsPath,
    //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
  ])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(dest("dist").pipe(browserSync.stream()));
}

// HTML task: listens to HTML files changes
function htmlTask() {
  return src([
    files.htmlPath,
    "!" + "node_modules/**/.*html", // to exclude any specific files
  ]);
}

// Cachebust
function cacheBustTask() {
  var cbString = new Date().getTime();
  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("."));
}

// BrowserSync
function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./",
    },
  });
  done();
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  watch(
    [files.scssPath, files.jsPath, files.htmlPath],
    { interval: 1000, usePolling: true }, //Makes docker work
    series(parallel(scssTask, jsTask, htmlTask), cacheBustTask, reload)
  );
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
  parallel(scssTask, jsTask, htmlTask),
  cacheBustTask,
  serve,
  watchTask
);
