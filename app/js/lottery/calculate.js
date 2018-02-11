class Calculate{
    /**
     * 计算注数
     * @param {number} active 当前选中的号码
     * @param {String} play_name 当前的玩法标识(页面的任二、任三……)
     * @return {number} 注数
     */
    computeCount(active, play_name){
        let count = 0;
        const exist = this.play_list.has(play_name);
        //存放排列组合后的值，可根据active来规定长度,fill则是给数据所有值填充0
        const arr = new Array(active).fill('0');
        //判断玩法是否支持，且属于法玩中的一种，玩法用R1~R8代表
        if(exist && play_name.at(0) === 'r'){
            //用类名直接点出来的为静态方法
            count = Calculate.combine(arr, play_name.split('')[1]);
        }
        return count;
    }
    /**
     * 组合运算(es6中不能使用argument.callee来调用自身的递归)
     * @param {*} arr 参与组合运算的数组
     * @param {*} size 组合运算的基数
     * @return 计算注数
     */
    static combine(arr, size){
        let allResult = [];
        (function f(arr, size, result){
            let arrLen = arr.length;
            if(size > arrLen){
                return;
            }
            if(size === arrLen){
                allResult.push([].concat(result, arr))
            }else{
                for(let i = 0;i<arrLen; i++){
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if(size === 1){
                        allResult.push(newResult);
                    }else{
                        let newArr = [].concat(arr);
                        newArr.splice(0, i+1);
                        f(newArr, size-1, newResult)
                    }
                }
            }
        })(arr, size, [])
    }
}