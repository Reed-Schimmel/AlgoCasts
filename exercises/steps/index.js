// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	const steps = []
	for (let i = 1; i <= n; i++) {
		let step = '#';
		for (let j = 1; j < n; j++) {
			if (j >= i) step = step + ' ';
			else step = step + '#';
		}
		console.log(step)
	}
}

module.exports = steps;
