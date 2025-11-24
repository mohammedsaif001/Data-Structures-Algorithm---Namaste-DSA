/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    /**
    1. Early Return if linked list is empty meaning no head
    2. Create a Set Map
    3. Traverse through each node and append the node in the set map
    4. Check if the node already exist in the map
    5. If yes then return true else false
     */

     if(!head) return false;
     const seenNodes = new Set();
     let curr = head;

     while( curr!=null){
        if(seenNodes.has(curr)) return true
        seenNodes.add(curr)
        curr = curr.next;
     }

     return false

};