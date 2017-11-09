
// import 'babel-polyfill';

var a = Symbol.for('foo');

var obj = {
    [a]: 'xuyixin'
};

console.log(obj[Symbol.for('foo')]);
console.log(obj[a]);
