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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 0. Keep a Sentnal Node Always ehn deleting something
    // 1. Take Slow & Fast Pointers
    // 2. Move the Fast Pointer to the nth position from start (Having slow & fast distance as n)
    // 3. Traverse till you find the null in fast pointer
    // 4. Once the fast pointer is reached null then start pointer will be AT THE PREV POISIOTN WHICH NEEDS TO DELETED
// 5. Then Delete It 

let sentinal = new ListNode();
sentinal.next = head;

let slow = sentinal;
let fast = sentinal;

for(let i=0;i<n;i++){
    fast = fast.next;
}

while(fast.next){
    slow = slow.next;
    fast = fast.next;
}

slow.next = slow.next.next;

return sentinal.next
};