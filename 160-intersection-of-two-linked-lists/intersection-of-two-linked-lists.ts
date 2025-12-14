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
    // 1. Add all elements of LL1 into set
    // 2. heck if the elemnt of LL2 is present if yes then return
    // Else return empty


    let set = new Set()
    let curr1 = headA;
    let curr2 = headB;

    while (curr1) {
        set.add(curr1)
        curr1 = curr1.next
    }

    while (curr2) {
        if(set.has(curr2)) return curr2
        curr2 = curr2.next
    }

    return null
};