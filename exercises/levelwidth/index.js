// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	if (root === null) return;

	const levels = [1];
	const itemQueue = [root,'stop'];

	let count = 0;

	while (itemQueue.length) {
		item = itemQueue.shift();

		if (item === 'stop' && count !== 0) {
			levels.push(count);
			count = 0;
		} else if (typeof item === typeof root) {
			itemQueue.push(...item.children);
			itemQueue.push('stop');
			count += item.children.length;
		}
	}

	return levels;
}

module.exports = levelWidth;
