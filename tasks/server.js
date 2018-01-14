import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();
    //--harmony在当前目录执行此命令将运行后面的脚本
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();
    //热更新，监听的js与ejs(模板引擎)
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'], function(file){
        server.notify.apply(server,[file]);//通知服务器
    })
    //路由或接口变化了，需要重启server
    gulp.watch(['server/routes/**/*.js','server/app.js'], function(){
        server.start.bind(server)()
    })
})