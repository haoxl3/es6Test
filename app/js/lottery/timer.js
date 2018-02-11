class Timer{
    countdown(end, update, handle){
        const now = new Date().getTime();
        const self = this;
        // 如果当前日期大于截止时间则直接返回
        if(now - end){
            handle.call(self);
        }else{
            // 计算剩余时间
            let last_time = end - now;
            const px_d = 1000 * 60 * 60 * 24;
            const px_h = 1000 * 60 * 60;
            const px_m = 1000 * 60;
            const px_s = 1000;
            let d = Math.floor(last_time/px_d);
            let h = Math.floor((last_time-d*px_d)/px_h);
            let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);
            let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
            let r = [];
            if(d>0){
                r.push(`<em>${d}</em>天`);
            }
            if(r.length || h>0){
                r.push(`<em>${h}</em>时`);
            }
            if(r.length || m>0){
                r.push(`<em>${m}</em>分`);
            }
            if(r.length || s>0){
                r.push(`<em>${s}</em>秒`);
            }
            self.last_time = r.join('');
            update.call(self, r.join(''));
            // 每隔一秒轮询一次
            setTimeout(function(){
                self.countdown(end, update, handle);
            },1000);
        }
    }
}