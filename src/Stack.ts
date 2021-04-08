import Node from "./Node";

export default class Stack {
    private items: Node[] = [];

    isEmpty() {
        return this.items.length == 0;
    }

    push(node: Node) {
        this.items.push(node);
    }

    count() {
        return this.items.length;
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.count() -1];
    }
}
