"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAdjacentAt_1 = require("@writetome51/array-get-adjacent-at/getAdjacentAt");
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
function getBetween(numItemsToIgnoreAtEachEnd, array) {
    errorIfNotInteger_1.errorIfNotInteger(numItemsToIgnoreAtEachEnd);
    if (numItemsToIgnoreAtEachEnd < 1)
        throw new Error('The number of items to' +
            ' preserve at each end must be at least 1');
    if ((numItemsToIgnoreAtEachEnd * 2) >= array.length) {
        throw new Error('The number of items to preserve multiplied by 2' +
            ' is equal to or exceeds the length of the array. This is not allowed.');
    }
    var numToGet = array.length - (numItemsToIgnoreAtEachEnd * 2);
    return getAdjacentAt_1.getAdjacentAt(numItemsToIgnoreAtEachEnd, numToGet, array);
}
exports.getBetween = getBetween;
