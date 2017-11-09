
// import 'babel-polyfill';

var a = Symbol.for('foo');

var obj = {
    [a]: 'xuyixin'
};

console.log(obj[Symbol.for('foo')]);
console.log(obj[a]);

var arr = [1,2,3,4,5,1,2,3,4,5];

var s = new Set(arr);

for (let key of s) {
    console.log(key);
}
s.map((value, key) => console.log(key + ' : ' + value))
