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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    /*  1. If head is null or contains only one element or k is 0 then return head as it is
        2. We will be using slow & fast pointer approach
        3. Lets say if k is more than the length of list, then we have to take its remaninder because k will be equal to K%length
        4. Take a pointer curr, point it to head then traverse this pointer through all the elements
        5. This will get us the length
        6. Now Decrease the size of K by K%length;
        7. Initialise slow & fast pointer and point both of these to head
        8. Move the fast pointer by k moves having difference slow & fast by k length
        9. Now move slow and fast pointer by 1 step each until fast.next is not null
        10. Point the fast.net to head to continue loop
        11. Make slow.next as newHead
        12. Return this new
    */
    if(!head || !head.next || k==0) return head;
    
    let curr = head ;
    let length = 0;

    while(curr){
        curr = curr.next;
        length++
    }

    let slow = head;
    let fast = head;

    k = k%length;

    for(let i=0;i<k;i++){
        fast = fast.next;
    }

    while(fast.next){
        slow = slow.next;
        fast=fast.next
    }
     fast.next = head;
     let newHead = slow.next
     slow.next = null;

     return newHead; 

};