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
    // 1. Find Middle Node & Divide the first and second half
    // 2. Reverse the second half of the LL
    // 3. Compare Each Element

    let slow = head;
    let fast = head;
    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    let middle = slow

    let prev = null;
    let curr = middle;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }

    let firstHalf = head;
    let secondHalfReverse = prev;
    while (secondHalfReverse) {
        if (secondHalfReverse.val === firstHalf.val) {
            secondHalfReverse = secondHalfReverse.next;
            firstHalf = firstHalf.next
        }
        else {
            return false
        }
    }

    return true
};