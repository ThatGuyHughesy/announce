var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');
var bump = require('gulp-bump');
var header = require('gulp-header');
var minify = require('gulp-minify');
var clean = require('gulp-clean-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var umd = require('gulp-wrap-umd');

var distDir = './dist';
var pkg = require('./package.json');
var banner = ['/*!', pkg.name, pkg.version, '*/\n'].join(' ');
var umdOptions = {
    exports: 'Announce',
    namespace: 'Announce',
};

gulp.task('clean', function() {
    del.sync([distDir]);
});

gulp.task('js', function() {
    gulp.src('./src/js/**/*.js')
        .pipe(babel())
        .pipe(umd(umdOptions))
        .pipe(header(banner))
        .pipe(minify({
            ext: { min: '.min.js' }
        }))
        .pipe(gulp.dest(distDir + '/js'));
});

gulp.task('css', function() {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['./bower_components']
        }))
        .pipe(gulp.dest(distDir + '/css'))
        .pipe(clean())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(distDir + '/css'));
});

gulp.task('css:docs', function() {
    gulp.src('./docs/welcome/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./docs/welcome/css'));
});

var VERSIONS = ['patch', 'minor', 'major'];
for (var i = 0; i < VERSIONS.length; ++i) {
    (function(version) {
        gulp.task('version:' + version, function() {
            gulp.src(['package.json', 'bower.json'])
                .pipe(bump({ type: version }))
                .pipe(gulp.dest('.'));
        });
    })(VERSIONS[i]);
}

gulp.task('watch', ['js', 'css'], function() {
    gulp.watch('./src/js/**/*', ['js']);
    gulp.watch('./src/scss/**/*', ['css']);
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['build']);
