import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

//创建任务-对引入的JS进行处理
gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({
        errorhandle:function(){

        }
    }))
    .pipe(named())
    .pipe(gulpWebpack({//使用webpack对JS进行babel处理
        module:{
            loaders:[{
                test: /\.js$/,
                loader: 'babel-loader'
            }]
        }
    }),null,(err,stats)=>{
        //错误处理
        log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
            chunks: false
        }))
    })
    //将编译好的文件写入下面的路径中
    .pipe(gulp.dest('server/publick/js'))
    //重命令文件
    .pipe(rename({
        basename: 'cp',
        extname: '.min.js'
    }))
    //压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    //存储
    .pipe(gulp.dest('server/public/js'))
    //监听文件变化后自动刷新
    .pipe(gulpif(args.watch,livereload()))
})