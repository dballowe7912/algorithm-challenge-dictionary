function mapForEach(arr, fn) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function (item) {
	return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
	return item > 2;
});
console.log(arr3);

// checks if an item passed in is greater than limiter
var checkPastLimit = function (limiter, item) {
	return item > limiter;
};
// passes arr to mapForEach function, which only takes an array,
// sets this to checkPastLimit and passes 1 as the first argument,
// then passes checkPastLimit(1) to mapForEach
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// resulting in:
// function mapForEach(arr, checkPastLimit) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(checkPastLimit(1, (arr[i])))
//   }
//   return newArr;
// }
console.log(arr4);

var checkPastLimitSimplified = function (limiter) {
	return function (limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};

let arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);
