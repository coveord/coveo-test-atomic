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

function installAtomicAlpha(cb) {
  exec("npm i @coveo/atomic@alpha", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function installAtomicLatest(cb) {
  exec("npm i @coveo/atomic@latest", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function getTestPages(cb) {
  return svn.commands.checkout(
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

function copyLocalTestFiles() {
  return gulp
    .src(["./testPages/**/*"])
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

function watch() {
  livereload.listen();
  gulp.watch("./testPages/*.html", gulp.series(getTestPages));
}

exports.alpha = gulp.series(
  installAtomicAlpha,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  copyLocalTestFiles
);

exports.beta = gulp.series(
  installAtomicBeta,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  copyLocalTestFiles,

);

exports.latest = gulp.series(
  installAtomicLatest,
  copyResource,
  copyExtraResources,
  copyThemes,
  getTestPages,
  copyLocalTestFiles
);