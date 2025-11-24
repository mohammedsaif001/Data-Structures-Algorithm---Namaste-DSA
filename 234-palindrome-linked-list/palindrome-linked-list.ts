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

function isPalindrome(head: ListNode | null): boolean {
    // TODO:
    // 1. Find the middle Node
    // 2. Reverse the Second half of the linked list
    // 3. Compare the firt half and second half nodes if they are equal


    // 1. Find the middle Node
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next;
    }
    let middle = slow;

    // 2. Reverse the Second half of the linked list
    let prev = null;
    let curr = middle;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // 3. Compare the firt half and second half nodes if they are equal
    let firstHalf = head;
    let secondHalf = prev;

    while(secondHalf){
        if(firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next
    } 

    return true


};