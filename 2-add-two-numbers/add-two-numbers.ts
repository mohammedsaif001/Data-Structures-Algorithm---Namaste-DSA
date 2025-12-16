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
    /**
 * PSEUDOCODE (STEP-WISE EXPLANATION):
 *
 * Step 1: Create a dummy (sentinel) node.
 *         - This helps us easily build the result list without handling special cases
 *           for the head node.
 *
 * Step 2: Create a `current` pointer starting at the sentinel.
 *         - We will use this to attach new digits as we calculate them.
 *
 * Step 3: Initialize `carry = 0`.
 *         - Carry is needed because adding two digits can produce sums >= 10.
 *
 * Step 4: Loop while (l1 exists OR l2 exists OR carry exists).
 *         - We must continue as long as ANY of the following has work left:
 *             a) l1 still has digits remaining
 *             b) l2 still has digits remaining
 *             c) carry still needs to be added as a new node
 *         - This handles cases where:
 *             - The lists are of different lengths
 *             - Both lists end but a final carry is still remaining
 *
 * Step 5: Extract l1's digit → (l1 ? l1.val : 0)
 *         Extract l2's digit → (l2 ? l2.val : 0)
 *         - If one list is shorter and becomes null, treat missing digits as 0.
 *         - This allows smooth addition without extra branching.
 *
 * Step 6: Compute sum = l1Val + l2Val + carry.
 *         - This simulates column-wise addition (same as adding numbers by hand).
 *
 * Step 7: Compute digit = sum % 10 (the new node's value).
 *
 * Step 8: Update carry = Math.floor(sum / 10).
 *         - If sum was >= 10, carry will be 1, otherwise 0.
 *
 * Step 9: Create a new ListNode(digit) and attach it to the result list.
 *         - Move the `current` pointer to this newly created node.
 *
 * Step 10: Advance l1 and l2 to their next nodes (if they exist).
 *
 * Step 11: After the loop finishes, return sentinel.next.
 *          - sentinel.next is the actual head of the computed sum list.
 */

    let sentinal = new ListNode();
    let carry = 0;
    let ans = sentinal;

    while (l1 || l2 || carry) {
        let l1Val = l1?.val ?? 0  
        let l2Val = l2?.val ?? 0  

        let sum = l1Val + l2Val + carry;
        carry = Math.floor(sum/10);
        let digit = sum%10;

        let newNode = new ListNode(digit);
        sentinal.next = newNode;
        sentinal = sentinal.next


        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return ans.next;
};

