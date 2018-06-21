// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	// 1. split string along whitespace
	const words = str.split(' ');

	// 2. replace first char of split string to uppercase
	words.forEach((word, idx) => {
		capitalized = word[0].toUpperCase() + word.slice(1);
		words[idx] = capitalized;
	});

	// 3. join strings together with whitespace
	return words.join(' ');
}

module.exports = capitalize;
