import LinkedList from "../src/LinkedList";
import Node from "../src/Node";


test("Smoke test ...", () => {
    expect(true).toEqual(true);
});

describe("LinkedList", () => {
    let linkedList: LinkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    })

    test("should be empty on instantiation", () => {
        expect(linkedList.isEmpty()).toBeTruthy()
    });

    test("should return head node", () => {
        let node = new Node();
        linkedList.addNode(node)
        expect(linkedList.head()).toBeTruthy()
    });

    test("should return total count of nodes", () => {
        let node = new Node();
        linkedList.addNode(node)
        expect(linkedList.count()).toEqual(1)
    });

    test("should find a node and return it", () => {
        let node = new Node();
        let node2 = new Node();
        linkedList.addNode(node)
        linkedList.addNode(node2)
        let result = linkedList.find(node);
        expect(result).toEqual(node);
    });

    test("should remove a node", () => {
        let aNode = new Node();
        let bNode = new Node();
        let cNode = new Node();
        let dNode = new Node();
        linkedList.addNode(aNode)
        linkedList.addNode(bNode)
        linkedList.addNode(cNode)
        linkedList.addNode(dNode)
        linkedList.remove(cNode);
        expect(linkedList.count()).toEqual(3);
        expect(linkedList.bNode.next()).toEqual(dNode);
    });
})