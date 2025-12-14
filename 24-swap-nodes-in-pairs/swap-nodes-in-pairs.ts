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

// Below Function is by having 3 pointer
// function swapPairs(head: ListNode | null): ListNode | null {
//   /* 1. If list is empty or has only one node, return head.
//     2. Create a dummy/sentinel node and point its next to head.
//     3. Initialize prev = sentinel, curr = head, next = curr.next.
//     4. While curr and next both exist:
//     5. Link prev.next → next (start the swap).
//     6. Rewire curr.next → next.next (cut curr ahead to the node after next).
//     7. Link next.next → curr (complete the swap so next comes before curr).
//     8. Move prev forward to curr (which is now the second node of the swapped pair).
//     8. Advance curr = curr.next and next = curr?.next for the next iteration.
//     10. Return sentinel.next (new head).
// */
//     if (!head || !head.next) return head;
//     let sentinal = new ListNode();
//     sentinal.next = head;
//     let prev = sentinal;
//     let curr = sentinal.next;
//     let next = curr.next;

//     while (curr && next) {
//         // Swapping The Nodes
//         prev.next = next;
//         prev = curr;
//         curr.next = next.next;
//         next.next = prev;

//         // Increase the pointer;
//         curr = curr && curr.next;
//         next = curr && curr.next;
//     }

//     return sentinal.next;
// };

// Below function uses recursion
function swapPairs(head: ListNode | null): ListNode | null {
    /**
    1. Early Return if head is null or head's next
    2. Consider two nodes left and right
    3. Right will point to left
    4. Left Will point to rest nodes (Internally Taken as swapped)
     */
    if(!head || !head.next) return head;

    let left = head;
    let right = head.next;

    left.next = swapPairs(right.next);
    right.next = left;

    return right
};