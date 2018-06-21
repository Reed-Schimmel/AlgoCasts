// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const charGen = (char, num) => {
	const str = []
	for (let i = 0; i < num; i++) {
		str.push(char);
	}
	return str.join('');
}

function pyramid(n) {
	const logs = [];
	for (let i = 1; i <= n; i++) {
		const spaces = charGen(' ', n - i);
		const hashes = charGen('#', 2 * i - 1);
		
		const line = spaces + hashes + spaces;
		logs.push(line);
	}
	logs.forEach((line) => console.log(line));
}

module.exports = pyramid;