/**
 * Created by zhoujialin on 2016/6/20.
 */

const Reflux = require('reflux');
const action = Reflux.createAction(); //���������� action

//���������
action.listen(data=> console.log('listener 1 ', data));
action.listen(data=> console.log('listener 2 ', data));

setTimeout(()=> action.trigger('zengliang'));

//action.triggerAsync('zengliang');

console.log('--------end--------');