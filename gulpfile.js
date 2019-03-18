var gulp = require("gulp");
var less = require("gulp-sass");

gulp.task("default", function () {
    gulp.watch("sass/*.scss").on("change", function (path) {
        console.log(path);
        gulp.src(path)
            .pipe(less())
            .pipe(gulp.dest("css"))

    });
});