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

function oddEvenList(head: ListNode | null): ListNode | null {
    // 1. If Head is emtpty or contains only one node then return as it is
    // 2. Point Odd to head & Point Even to head.next parallelly have a variable for even as the main pointer will be traversing
    // 3. Link all the nodes by skipping one node for both Odd & Even
    // 4. Check until we reach the next as null
    // Once done point the odd's last next to even's first node

    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenStart = even;

    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next
    }

    odd.next = evenStart;

    return head
};