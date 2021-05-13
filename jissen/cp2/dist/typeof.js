"use strict";
function type() {
    // typeof
    var str = '';
    var value;
    value = 'value';
    console.log(value);
    var obj = { foo: 'foo' };
    var obj2 = { foo: '' };
    obj2['foo'] = 'val';
    //obj2['bar'] = 'val';
    console.log(obj2);
    var k = 'foo';
    k = 'bar';
    console.log(k);
}
type();
