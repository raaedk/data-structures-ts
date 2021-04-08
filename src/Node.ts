export default class Node {
    private _value: any;
    private _next: Node;

    constructor(value: any = null) {
        this._value = value;
        // @ts-ignore
        this._next = null;
    }

    public get value() {
        return this._value;
    }

    public set value(val) {
        this._value = val;
    }

    get next() {
        return this._next;
    }
    set next(node) {
        this._next = node;
    }
}
