import yargs from 'yargs';
const args = yargs
//判断是否是生产环境
.option('production',{
    boolean: true,
    default: false,
    describe: 'min all scripts'
})

//改变文件后是否需要自动编译
.option('watch',{
    boolean: true,
    default: false,
    describe: 'watch all files'
})
//是否输出命令日志
.option('verbose',{
    boolean: true,
    default: false,
    describe:'log'
})
//映射
.option('sourcemaps',{
    describe: 'force the creation of sourcemaps'
})
//设置服务器端口
.option('port',{
    string: true,
    default: 8080,
    describe: 'server port'
})
//对输入的命令行以字符串解析
.argv
export default args;