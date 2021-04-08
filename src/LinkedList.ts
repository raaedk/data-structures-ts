import Node from "./Node";

export default class LinkedList {
    private _head: Node;
    private _count: number = 0;

    constructor() {
        // @ts-ignore
        this._head = null;
    }

    get head() {
        return this._head;
    }

    count() {
        return this._count;
    }

    add(node: Node) {
        this._count++;
        if (this._head == null) {
            this._head = node;
            return;
        } else if (this._head.next == null) {
            this._head.next = node;
            return
        }
        let current = this._head;

        while (current.next) {
            current = current.next;
            if (current.next == null) {
                current.next = node;
                break
            }
        }
    }

    find(val: any) {
        if (this.head.value == val) return this.head;

        let current = this._head.next;
        while (current) {
            if(current.value == val) {
                return current;
            }
        }
    }

    remove(node: Node) {
        if (this.head == node) {
            this._head = this._head.next;
            return;
        }
        let previous = this._head;
        let current = this._head.next;
        while (current) {
            if (current == node) {
                previous.next = current.next;
                this._count--;
                return;
            }
            previous = current;
            current = current.next;
        }
    }
}
