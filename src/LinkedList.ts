// class Node {
//     public value : number;
//     public next : Node | null;

//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

import Node from "../src/Node";

export default class LinkedList {
  public head : Node | null;
  public size : number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public count() {
    return this.size;
  }

  public add(newNode : Node) {
    let current : null | Node;

    if (this.head == null) {
      this.head = newNode;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  public find(value : any) : any {
    let current : Node;

    if (this.head != null) {
      current = this.head;

      while (current.next) {
        if (current.value === value) {
          return current;
        }

        current = current.next;
      }
    }

    return null;
  }

  public remove(node : Node) {
    let current : Node;
    
    if (this.head == null) {
      return;
    }

    current = this.head;

    while (current.next) {
      if (current.next == node) {
        current.next = current.next.next;
      } else {
        current = current.next
      }
    }

    this.size--;
  }
}