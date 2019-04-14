"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_1 = require("error-if-not-integer");
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
function getBetween(numItemsToIgnoreAtEachEnd, array) {
    error_if_not_integer_1.errorIfNotInteger(numItemsToIgnoreAtEachEnd);
    if (numItemsToIgnoreAtEachEnd < 1)
        throw new Error('The number of items to' +
            ' preserve at each end must be at least 1');
    if ((numItemsToIgnoreAtEachEnd * 2) >= array.length) {
        throw new Error('The number of items to preserve multiplied by 2' +
            ' is equal to or exceeds the length of the array. This is not allowed.');
    }
    var numToGet = array.length - (numItemsToIgnoreAtEachEnd * 2);
    return array_get_adjacent_at_1.getAdjacentAt(numItemsToIgnoreAtEachEnd, numToGet, array);
}
exports.getBetween = getBetween;
