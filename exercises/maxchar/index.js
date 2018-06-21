// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// I initially see two way of doing it
// 1. 
//		a) Create a dict of {char: count}
//		b) return char with highest count

function maxChar(str) {
	const charCounts = {};

	// 1. Populate charCounts dict
	str.split('').forEach((char) => {
		charCounts[char] = charCounts[char] + 1 || 1;
	});

	// 2. Find the key with the largest value
	return Object.keys(charCounts).reduce((char, maxChar) => {	
		const charN = charCounts[char];
		const maxN = charCounts[maxChar];
		return charN > maxN ? char : maxChar;
	});
}

module.exports = maxChar;
