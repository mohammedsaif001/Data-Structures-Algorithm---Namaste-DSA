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

/**
 * Reverse a linked list (iterative).
 *
 * Steps happening in each loop:
 * 1. Store next node (temp = curr.next)
 * 2. Reverse pointer (curr.next = prev)
 * 3. Move prev forward (prev = curr)
 * 4. Move curr forward (curr = temp)
 *
 * Logic:
 * - We walk through the list once.
 * - Each node’s next pointer is flipped to point backward.
 * - `prev` ends up as the new head.
 */
 
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev
};