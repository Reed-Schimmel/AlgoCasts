// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// 1. create empty array.
	// 2. loop array.length / size (rounding up) times.
	// 3. during each pass splice given array and insert
	//	 into the new array.

	const newArray = [];
	const iterations = Math.ceil(array.length / size);

	for (let i = 0; i < iterations; i++) {
		newArray.push(array.slice(i * size, (i + 1) * size));
	}

	return newArray;
}

//console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
//console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = chunk;
