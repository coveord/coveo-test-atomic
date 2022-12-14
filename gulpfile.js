const gulp = require("gulp");
const debug = require("gulp-debug");
const exec = require("child_process").exec;
const livereload = require("gulp-livereload");
const svn = require("node-svn-ultimate");

function installAtomicBeta(cb) {
  exec("npm i @coveo/atomic@beta", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function installAtomicNext(cb) {
  exec("npm i @coveo/atomic@next", function (err, stdout, stderr) {
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
  return svn.commands.checkout(
    "https://github.com/coveo/ui-kit/branches/prerelease/v2/packages/atomic/src/pages",
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

function copyLocalTestFiles() {
  return gulp
    .src(["./testPages/*"])
    .pipe(gulp.dest("./public"))
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
  installAtomicNext,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  copyLocalTestFiles,

);

exports.dev = gulp.series(
  installAtomicV2,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  copyLocalTestFiles,
  gulp.parallel(serveStart, watch)
);

exports.alpha = gulp.series(
  installAtomicAlpha,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  copyLocalTestFiles,
  gulp.parallel(serveStart, watch)
);
