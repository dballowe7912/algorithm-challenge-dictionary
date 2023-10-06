function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
// [2, 1, 9, 76, 4]
// i = 1 arr[1] = currentValue [2, current, 9, 76, 4]
// j = 0 arr[0] = 2 [j, current, 9, 76, 4]
