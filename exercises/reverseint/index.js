// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// 1. convert int to string
	let stringN = n.toString();

	// 2. Reverse string
	stringN = stringN.split('').reverse().join('');
	// ex. -15 -> 15-; parseInt will ignore the '-'

	// 3. Parse string to int
	const reversedN = parseInt(stringN);

	// 4. Multiply int by sign
	const sign = Math.sign(n);

	// 5. Return reversedN * sign
	return reversedN * sign;
}

module.exports = reverseInt;
