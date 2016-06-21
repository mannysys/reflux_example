/**
 * Created by zhoujialin on 2016/6/20.
 */

const Reflux = require('reflux');
const action = Reflux.createAction(); //创建个匿名 action

//加入监听器
action.listen(data=> console.log('listener 1 , data is ', data));
action.listen(data=> console.log('listener 2 , data is ', data));

//触发它
action.trigger('Leo'); //同步
action.triggerAsync('Leo'); //异步
