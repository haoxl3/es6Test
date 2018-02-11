import 'babel-polyfill'
import Lottery from './lottery'
// 项目入口
class Test{
    constructor(){
        this.a = 'hello world!'
    }
}
let test = new Test();
document.body.innerHTML = test.a;