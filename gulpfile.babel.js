import del from 'del';
import gulp from 'gulp';
import ava from 'gulp-ava';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

const src = './src/index.js';
const staticData = './src/templates/**/*';
const tests = './test/**/*.test.js';
const dest = './generators';

gulp.task('clean', () => del(dest));

gulp.task('lint', () =>
  gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch(src, gulp.series('lint', 'default'));
});

gulp.task('test', () => 
  gulp.src(tests)
    .pipe(ava({ verbose: true }))
);

gulp.task('default', gulp.series('lint', () => {
    return gulp.src(src)
      .pipe(babel())
      .pipe(gulp.dest(`${dest}/app`));
  }, () => {
    return gulp.src(staticData)
      .pipe(gulp.dest(`${dest}/app/templates`));
  })
);

