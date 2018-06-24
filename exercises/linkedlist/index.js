// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	construction() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let next = this.head;
		let i = 0;
		while (next) {
			i++
			next = next.next;
		}
		return i;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let next = this.head;

		while (next) {
			if (next.next === null) break;
			next = next.next;
		}

		return next;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) return;		
		if (!this.head.next) return this.head = null;

		let next = this.head;

		while (next) {
			if (next.next.next === null) {
				next.next = null;
			}

			next = next.next;
		}
		
	}

	insertLast(data) {
		if (!this.head) return this.head = new Node(data);

		let next = this.head;
		let last;
		while (next) {
			last = next;
			next = next.next;
			
		}

		last.next = new Node(data);
	}

	getAt(idx) {
		if (!this.head) return null;
		
		let node = this.head;

		for (let i = 0; i < idx; i++) {
			if (!node.next) return null;
			node = node.next;
		}

		return node;
	}

	removeAt(idx) {

		if (!this.head) return null;

		if (idx === 0) return this.removeFirst();

		let node = this.getAt(idx);
		let last = this.getAt(idx - 1);

		if (!node) return null;
		else if (!node.next) this.removeLast();
		else last.next = node.next;

	}

	insertAt(data, idx) {

		if (idx === 0) return this.insertFirst(data);

		const size = this.size();

		if (idx >= size) return this.insertLast(data);

		let node = this.getAt(idx - 1);

		node.next = new Node(data, node.next);
	}

	forEach(func) {
		let node = this.head;

		while (node) {
			func(node);
			node = node.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;

		while (node) {
			yield node;
			node = node.next;
		}
	}

}

module.exports = { Node, LinkedList };
