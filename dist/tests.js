"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1:
var middle = index_1.getBetween(1, arr);
if (middle.length === 8 && middle[0] === 2 && middle[7] === 9)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: Make sure source array has not changed:
if (arr.length === 10 && arr[0] === 1 && arr[9] === 10)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3:
middle = index_1.getBetween(2, arr);
if (middle.length === 6 && middle[0] === 3 && middle[5] === 8)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4:
middle = index_1.getBetween(3, arr);
if (middle.length === 4 && middle[0] === 4 && middle[3] === 7)
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5:
var errorTriggered = false;
try {
    index_1.getBetween(0, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6: Make sure error triggers if first arg times 2 equals or exceeds length of
// array:
errorTriggered = false;
try {
    index_1.getBetween(5, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: Make sure error triggers if float is passed as first argument:
errorTriggered = false;
try {
    index_1.getBetween(1.0001, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: Make sure error triggers if anything but array is passed as second argument:
errorTriggered = false;
try {
    index_1.getBetween(1, { prop: 1 });
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
