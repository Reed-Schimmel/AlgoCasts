// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


const create2dMatrix = (n) => {
	const matrix = [];
	for (let i = 0; i < n; i++) {
		const row = [];
		for (let j = 0; j < n; j++) {
			row.push(-1);
		}
	matrix.push(row)
	}
	return matrix;
};



function matrix(n) {
	const matrix = create2dMatrix(n);
	
	let left = 0;
	let right = n - 1;
	let top = 0;
	let bottom = n - 1;

	let num = 1;
	let col = 0;
	let row = 0;

	while (num < n**2) {

		for (col; col < right; col += 1) {
			matrix[row][col] = num++;
		}
		top += 1;

		for (row; row < bottom; row += 1) {
			matrix[row][col] = num++;
		}
		bottom -= 1;

		for (col; col > left; col -= 1) {
			matrix[row][col] = num++;
		}
		left += 1;

		for (row; row > top; row -= 1) {
			matrix[row][col] = num++;
		}
		right -= 1;

	}
	matrix[row][col] = num;

	return matrix;
}


module.exports = matrix;





























