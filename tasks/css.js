import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
    //拷贝到public目录
    .pipe(gulp.dest('server/public'))
})