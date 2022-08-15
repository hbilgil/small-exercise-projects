class LinkedList { //represents the full list
    constructor(head = null) { //head pointer constructor
        this.head = head;
    }

    append(value) { // allowing to add a new node containing value to the end of the list
        let newNode = new Node(value);
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        lastNode.next = newNode;
        return newNode;
    }

    prepend(value) { //allowing to add a new node containing value to the start of the list
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return newNode;
    }

    size() { //allowing to return the # number of nodes in the list
        let length = 1; //initially a headNode is in the list
        let lastNode = this.head;
        while (lastNode.next) {
            length++;
            lastNode = lastNode.next;
        }
        return length;
    }

    headNode() { //allowing to return the first node in the list
        return this.head;
    }

    tail() { //allowing to return the last node in the list
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        return lastNode;
    }

    at(index) { //allowing to return the node at the given index
        let nodeAtChosenIndex = this.head; //initially the first node is the chosen Node
        while (index !== 1) {
            nodeAtChosenIndex = nodeAtChosenIndex.next;
            index--;
        }
        return nodeAtChosenIndex;
    }

    pop() { //allowing to remove the last element from the list

        let lastNode = this.head;
        let previousNode;
        while (lastNode.next) {
            previousNode = lastNode;
            lastNode = lastNode.next;
        }
        previousNode.next = null;
        Object.setPrototypeOf(lastNode, null);
        return previousNode;
	}

    contains(value) {
        let lastNode = this.head;
        while (lastNode != null && lastNode.data !== value) {
          lastNode = lastNode.next;
        }
        return lastNode == null ? false : true;
    }

    find(value) { //allowing to return the index of the node containing value, or null if not found.
        let lastNode = this.head;
        let index = 0;
        while (lastNode.next) {
            if (lastNode.data === value) return index;
            lastNode = lastNode.next;
            index++
        }
        return lastNode;
    }

    toString() { //allowing to turn LinkedList objects as strings to print them out and preview them in the console
        let lastNode = this.head;
        let stringedData = "";
        while (lastNode.next) {
            stringedData += `(${lastNode.data}) ->`;
            lastNode = lastNode.next;
        }
        stringedData += `(${lastNode.data}) -> null`;
        return stringedData;
    }

    insertAt(value,index) { //allowing to insert a new node with the provided value at the given index.
        let lastNode = this.head;
        let previousNode;
        while (index) {
            previousNode = lastNode;
            lastNode = lastNode.next;
            index--;
        }
        let newNode = new Node(value);
        newNode.next = lastNode;
        previousNode.next = newNode;
        return newNode;
    }

    removeAt(index) {
        let lastNode = this.head;
        let previousNode;
        while (index) {
            previousNode = lastNode;
            lastNode = lastNode.next;
            index--;
        }
        previousNode.next = lastNode.next;
        Object.setPrototypeOf(lastNode,null);
        return previousNode;
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(2);
let node2 = new Node(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log("Second node:",list.head.next.data);
console.log("Append Node",list.append(8));
console.log("Append Node",list.append(7));
console.log("Append Node",list.append(10));
console.log("Third Node (After 8):",list.head.next.next.data);
console.log("First Node Data (Before 12):",list.head.data);
console.log("Linked List to String (Before 12):",list.toString());
console.log("Prepend Node",list.prepend(12));
console.log("First Node Data (After 12):",list.head.data);
console.log("Linked List to String (After 12):",list.toString());
console.log("Head Node (Before Popping):",list.headNode());
console.log("Last Node (Before Popping):",list.tail());
console.log("At Index (Before Popping):",list.at(4));
console.log("Node Size (Before Popping):",list.size());
console.log("Linked List to String (Before Popping):",list.toString());
console.log("Pop Node:",list.pop());
console.log("Head Node (After popping):",list.headNode());
console.log("Last Node (After popping):",list.tail());
console.log("At Index (After popping):",list.at(4));
console.log("Node Size (After popping):",list.size());
console.log("Linked List to String (After Popping):",list.toString());
console.log("Contains Value (For a falsy value):",list.contains(1));
console.log("Contains Value (For a truthy value):",list.contains(12));
console.log("Find Value at Index:",list.find(5));
console.log("Linked List to String (Before Inserting):",list.toString());
console.log("Insert value at index:",list.insertAt(15,3));
console.log("Linked List to String (After Inserting):",list.toString());
console.log("Linked List to String (Before Removing):",list.toString());
console.log("Remove node at index:",list.removeAt(4));
console.log("Linked List to String (After Removing):",list.toString());