const { series } = require('gulp');
const argv = require('yargs').argv;
const { spawn, exec } = require('child_process');
const gulp = require('gulp');
const PROJECT_NAME = 'APPLICATION-NAME';

const PROJECTS = {
  frontend: PROJECT_NAME,
  backend: 'api'
}
const OUTPUT = `dist/apps/${PROJECT_NAME}`;

function build(prj, cb) {
  exec(`nx build ${prj} --prod`, (err, stdout, stderr) => {
    if (!!err) return cb(err);
    cb();
  });

}

function moveDirTask(dir, dest) {
  return function() {
    return gulp.src(`${dir}/**/*`)
      .pipe(gulp.dest(`${dest}/`));
  };
}

gulp.task('build_frontend', function(cb) {
  build(PROJECTS.frontend, cb);
});

gulp.task('build_backend', function(cb) {
  build(PROJECTS.backend, cb);
});

gulp.task('compose',
  moveDirTask(OUTPUT, 'dist/apps/api/public'));

gulp.task('end', function(cb) {
  console.log('DONE!');
  cb();
});

gulp.task('deploy', gulp.series(
  'build_frontend',
  'build_backend',
  'compose',
  'end'));
