// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

const flipStack = (stackOne, stackTwo, func) => {
	while (stackOne.peek()) {
		stackTwo.push(stackOne.pop())
	}

	const result = func();

	while (stackTwo.peek()) {
		stackOne.push(stackTwo.pop())
	}

	return result;
};

class Queue {
	constructor() {

	this.stackOne = new Stack();
	this.stackTwo = new Stack();

	}

	add(record) {
		this.stackOne.push(record);
	}

	remove() {
		return flipStack(this.stackOne, this.stackTwo, () => this.stackTwo.pop());
	}

	peek() {
		return flipStack(this.stackOne, this.stackTwo, () => this.stackTwo.peek());
	}
}

module.exports = Queue;
