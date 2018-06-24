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
}

module.exports = { Node, LinkedList };
