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
    // 1. Create a sentinal Node
    // 2. Point Sentinal.next = head;
    // 3. Traverse From sentinal.next and check if the next val is equal to the given value
    // 4. If yes then remove theat element

    let sentinal = new ListNode();
    sentinal.next = head;
    let curr = sentinal;

    while(curr && curr.next){
        if(curr.next.val === val){
        curr.next = curr.next.next
        }
        else{
            curr = curr.next
        }
    } 

    return sentinal.next;

};