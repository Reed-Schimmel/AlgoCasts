// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data))
	}

	remove(data) {
		this.children = this.children.filter(node => node.data !== data);
	}
}

class Tree {
	constructor(data) {
		this.root = null;
	}

	traverseBF(func) {
		if (this.root === null) return;	

		const execQueue = [this.root];

		let node;

		while (execQueue.length) {
			node = execQueue.shift();
			execQueue.push(...node.children);
			func(node)
		}
	}

	traverseDF(func, node = this.root) {
		if (this.root === null) return;

		func(node);
		node.children.forEach(childNode => this.traverseDF(func, childNode));
	}
}

module.exports = { Tree, Node };
