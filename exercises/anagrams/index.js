// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const charCountObj = str => {
	const countObj = {};

	str.split('').forEach(char => {
		switch(char) {
		case ' ':
			return
		case ',':
			return
		case '.':
			return
		case '!':
			return
		case '?':
			return
		}		

		const lowerChar = char.toLowerCase()
		countObj[lowerChar] = countObj[lowerChar] + 1 || 1;
	});

	return countObj;
};

const hasSameCharCount = (objA, objB) => {
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) return false;

	keysA.sort();
	keysB.sort();

	const sameKeys = keysA.every((key, idx) => key === keysB[idx]);

	if (!sameKeys) return false;

	return keysA.every(key => objA[key] === objB[key]);
};

function anagrams(stringA, stringB) {
	const countA = charCountObj(stringA);
	const countB = charCountObj(stringB);

	return hasSameCharCount(countA, countB);
}

module.exports = anagrams;
