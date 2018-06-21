// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//function vowels(str) {
//	return str.split('').filter(char => {
//		char = char.toLowerCase();
//		const isVowel =
//			char === 'a' ||
//			char === 'e' ||
//			char === 'i' ||
//			char === 'o' ||
//			char === 'u';
//		return isVowel;
//	}).length;
//}

function vowels(str) {
	const vowelString = str.match(/[aeiou]/gi);
	return vowelString ? vowelString.length : 0
}

module.exports = vowels;
