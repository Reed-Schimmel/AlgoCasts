// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let tmp = 0;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - i; j++) {

      if (arr[j] > arr[j+1]) {
        tmp = arr[j];
	arr[j] = arr[j+1];
	arr[j+1] = tmp;
      }

    }

  }
  return arr;
}

function selectionSort(arr) {
	for (let i = 0; i< arr.length; i++) {
		let indexOfMin = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}

		if (indexOfMin !== i) {
			let tmp = arr[i];
			arr[i] = arr[indexOfMin];
			arr[indexOfMin] = tmp;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;

	const topIdx = Math.floor(arr.length / 2);

	const left = arr.slice(0, topIdx);
	const right = arr.slice(topIdx);

	return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {

	const merged = [];

	while (left.length && right.length) {		
		if (left[0] < right[0]) {
			merged.push(left.shift())
		} else {
			merged.push(right.shift());
		}
	}

	return [...merged, ...left, ...right];
}

// const a = merge([1,3,5,7,9,11],[2,4,6,8])
// console.log(a)

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// 1. Define input
// 2. Define output
// 3. create example invocation
// 4. create sudo code
// 5. write our function