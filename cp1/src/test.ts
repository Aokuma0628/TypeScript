export function test1() {
    return 'test1';
}

export function test2() {
    return {value: 'test2'};
}

import {sampleText, sampleFunction} from './sample';
const a = sampleFunction();
const b = sampleText;

console.log(a, b);
console.log('test');