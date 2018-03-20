var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

//Complie Sass & Inject into browser
gulp.task("sass", function() {
  return gulp.src(["public/scss/style.scss", "public/scss/*.scss"])
  .pipe(sass())
  .pipe(gulp.dest("public/css"))
  .pipe(browserSync.stream());
});

//Move JS files to Public folder
gulp.task("js", function() {
  return gulp.src(["node_modules/jquery/dist/jquery.min.js"])
  .pipe(gulp.dest("public/js"))
  .pipe(browserSync.stream());
});

gulp.task("default", ["sass", "js"]);