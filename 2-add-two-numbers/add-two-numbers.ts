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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sentinal = new ListNode();
    let ans = sentinal;
    let carry = 0;

    while (l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        let sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        let newNode = new ListNode(digit);

        sentinal.next = newNode;
        sentinal = sentinal.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return ans.next;
};