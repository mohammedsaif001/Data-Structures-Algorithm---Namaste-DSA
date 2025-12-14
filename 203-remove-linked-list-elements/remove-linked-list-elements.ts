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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // Create  a sentinal node 
    // Check the next element is val if yes then skip the next node

    let sentinal = new ListNode();
    sentinal.next = head;

    let curr = sentinal

    while (curr?.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next;
        }
    }

    return sentinal.next
};