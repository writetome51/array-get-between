"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAdjacentAt_1 = require("./getAdjacentAt");
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
function getBetween(numItemsToKeepAtEachEnd, array) {
    errorIfNotInteger_1.errorIfNotInteger(numItemsToKeepAtEachEnd);
    if (numItemsToKeepAtEachEnd < 1)
        throw new Error('The number of items to' +
            ' preserve at each end must be at least 1');
    if ((numItemsToKeepAtEachEnd * 2) > array.length) {
        throw new Error('The number of items to preserve multiplied by 2' +
            ' exceeds the length of the array. This is not allowed.');
    }
    var numToGet = array.length - (numItemsToKeepAtEachEnd * 2);
    return getAdjacentAt_1.getAdjacentAt(numItemsToKeepAtEachEnd, numToGet, array);
}
exports.getBetween = getBetween;
