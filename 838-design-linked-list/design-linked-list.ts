class Node {
    val: number;
    next: Node | null;

  // Initialise the linked list with head & initial sizze will be 0
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
      head: Node | null;
    size: number;

    constructor() {
          this.head = null;
        this.size = 0;
    }

    get(index: number): number {
        /*
   1. Keep Initial Pointer to head
   2. Traverse till Index;
   3. Return Positions Val
   4. If Index out of bound then return -1

    */
        if (index < 0 || index >= this.size) return -1

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    addAtHead(val: number): void {
        /*
           1. Initialise the New Node
           2. Point the existing head to nextNodes Next 
           3. Point the Head to this Node
           4. Increase the linked in Size
            */
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    addAtTail(val: number): void {
        /*
           1. Initialise the new node
           2. Point the curremt node to the head
           3. Traverse till the last node which means traverse until you find the poiter which is pointing to null;
           4. Once reached last node then add this last node pointing to newnode
           5. Increase the Linked List Size
           6. If Linked List is empty then add at Head
            */

        if (!this.head) {
            this.addAtHead(val);
            return;
        }

        const newNode = new Node(val);
        let currNode = this.head;


        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
 /*
    1. Create a New Node
    2. Traverse the Linked until found the index -1 because we have to place at the given index and not after it, so point index -1 to the new node hich will be at the pos;
    3. Point the New Node next to prev nodes next
    4. Point the prev index to this node
    5. Increase the size;
    6. If Index is 0 then add at tail
    7. If index is same as the size of linked list then ad at tail
    8. If Index Out of bound return
     */
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    if (index > this.size) return

    const newNode = new Node(val);
    let curr = this.head;


    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
    }

    deleteAtIndex(index: number): void {
 /*
    1. Initialise the pointer to head;
    2. Traverse till the index;
    3. Now Poinyt the Prev Element next to next.next so the chain will break
    4. Decrease the size
    5. If Index out of bound then early return
    6. If Index is at head then point the head to head.next 
    
     */

     if (index < 0 || index >= this.size) return;
    
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let curr = this.head;
    


    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */