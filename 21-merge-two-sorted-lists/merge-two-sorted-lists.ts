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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    /* 
    1. Create a Sentinal Node
    2. Point the current to this sentinal Node
    3. Check If l1.val is less than l2.val if yes then point the curr.next to this l1 node
    4. Now increment the l1
    5. Then increment the curr
    6. Do the reverse in else condition
    7. Iterate this Step 3 to 6 Until both l1 && l2 exist because the comparison should happen between 2 nodes
    8. Lets say if l1 has lesser nodes than l2 then after all the iteration point the last node of curr.next to the remaining of l2 as its already sorted & vice-versa
    9. Now Return the sentinal.next 
    */
    let sentinal = new ListNode();
    let curr = sentinal

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next
    }
    if (!l1) curr.next = l2
    if (!l2) curr.next = l1

    return sentinal.next;
};