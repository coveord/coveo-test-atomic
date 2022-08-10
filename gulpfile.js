const gulp = require("gulp");
const debug = require("gulp-debug");
const exec = require("child_process").exec;
const livereload = require("gulp-livereload");
const download = require("gulp-download");
const svnUltimate = require("node-svn-ultimate");

function installAtomicBeta(cb) {
  exec("npm i @coveo/atomic@beta", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function installAtomicAlpha(cb) {
  exec("npm i @coveo/atomic@alpha", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function getTestPages(cb) {
  return svnUltimate.commands.checkout(
    "https://github.com/coveo/ui-kit/trunk/packages/atomic/src/pages",
    "./public/",
    function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    }
  );
}

function copyResource() {
  return gulp
    .src(["./node_modules/@coveo/atomic/dist/atomic/**/*"])
    .pipe(gulp.dest("./public/build/"))
    .pipe(debug());
}

function copyExtraResources() {
  return gulp
    .src(["./resources/**/*"])
    .pipe(gulp.dest("./public/build/assets"))
    .pipe(debug());
}

function copyThemes() {
  return gulp
    .src(["./public/build/themes/**/*"])
    .pipe(gulp.dest("./public/themes"))
    .pipe(debug());
}

function serveStart(cb) {
  exec("npx serve", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function watch() {
  livereload.listen();
  gulp.watch("./testPages/*.html", gulp.series(getTestPages));
}

exports.default = gulp.series(
  installAtomicBeta,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages
);

exports.dev = gulp.series(
  installAtomicBeta,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  gulp.parallel(serveStart, watch)
);

exports.alpha = gulp.series(
  installAtomicAlpha,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  gulp.parallel(serveStart, watch)
);
