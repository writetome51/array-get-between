Function returns middle section of array.

getBetween(numItemsToIgnoreAtEachEnd, array);

Examples:

let arr = [1,2,3,4,5,6,7,8,9,10];

let middle = getBetween(2, arr);

middle is now [3,4,5,6,7,8]

let middle = getBetween(4, arr);

middle is now [5,6]