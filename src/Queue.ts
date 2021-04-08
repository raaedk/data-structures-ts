import Node from "./Node";

export default class Queue {
    private items: Node[] = [];

    isEmpty() {
        return this.items.length == 0;
    }

    enqueue(node: Node) {
        this.items.push(node);
    }

    dequeue() {
        return this.items.shift();
    }

    length() {
        return this.items.length;
    }

    front() {
        return this.items[0];
    }

    rear() {
        return this.items[this.length() -1];
    }
}
