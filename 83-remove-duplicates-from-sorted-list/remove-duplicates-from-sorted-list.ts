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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let sentinal = new ListNode();
    sentinal.next = head
    let curr = sentinal.next;

    if(!head) return head;
    
    while(curr && curr.next){
        if(curr.next.val === curr.val){
            curr.next = curr.next.next
        }
        else{
            curr = curr.next;
        }
    }

    return sentinal.next;
};