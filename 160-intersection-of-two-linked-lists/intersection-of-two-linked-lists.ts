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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let seenNodes = new Set();
    let curr1 = headA;
    let curr2 = headB;

// Add All Elements of Linked List 1 in Set
    while(curr1){
        seenNodes.add(curr1);
        curr1 = curr1.next;
    }

    // Traverse through each element of List 2 in set and check if its present
    while(curr2){
        if(seenNodes.has(curr2)) return curr2;
        curr2 = curr2.next
    }

    return null
};