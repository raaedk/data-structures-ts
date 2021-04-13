export default class Node {
    private _value: any;
    public next : Node | null;

    constructor(value: any = null) {
        this._value = value;
        this.next = null;
    }

    public get value() {
        return this._value;
    }

    public set value(val) {
        this._value = val;
    }
}
