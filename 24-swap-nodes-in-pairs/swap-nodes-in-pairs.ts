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

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let sentinal = new ListNode();
    sentinal.next = head;
    let prev = sentinal;
    let curr = sentinal.next;
    let next = curr.next;

    while (curr && curr.next) {
        // Swapping The Nodes
        prev.next = next;
        prev = curr;
        curr.next = next.next;
        next.next = prev;

        // Increase the pointer;
        curr = curr && curr.next;
        next = curr && curr.next;
    }

    return sentinal.next;
};