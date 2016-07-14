var gulp = require('gulp');
var gulpMinify = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var nib = require('nib');

var config = {
  styles: {
    main: './src/styles/main.styl',
    output: './build/css'
  },
  scripts: {
    main: './src/scripts/main.js',
    output: './build/js'
  }
};

gulp.task('build:css', function (){
	gulp.src(config.styles.main)
	.pipe(stylus({
		use: nib(),
		'include css': true
		}))
	.pipe(gulpMinify())
	.pipe(gulp.dest(config.styles.output));
	});
gulp.task('default', ['build:css']);