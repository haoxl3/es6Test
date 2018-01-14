import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    //当执行browser任务时会监听JS文件，JS改变时会调用scripts中的任务
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
})