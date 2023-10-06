const merge = require('./merge.js');

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let midPoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint));
    return merge(left, right);
}

console.log(mergeSort([ 10, 24, 76, 73, 72, 1, 9 ]));
