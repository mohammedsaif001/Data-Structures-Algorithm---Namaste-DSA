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

function middleNode(head: ListNode | null): ListNode | null {
   /*
      Finding the middle of a linked list using Fast & Slow Pointer Technique

      1. Take 2 pointers: slowPointer and fastPointer.
      2. slowPointer moves 1 step at a time, fastPointer moves 2 steps at a time.
      3. Because fastPointer moves twice as fast, by the time fastPointer reaches the end,
         slowPointer will be at the middle (i.e., totalLength / 2).
      4. We continue iterating until fastPointer reaches the last node or becomes null.
      5. This logic automatically handles both odd-length and even-length linked lists:
           - Odd length → slowPointer lands exactly on middle.
           - Even length → slowPointer lands on the second middle node (LeetCode requirement).
    */
    
    let slowPointer = head;
    let fastPointer = head;

    while(fastPointer!==null && fastPointer.next!==null){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return slowPointer;
    
};