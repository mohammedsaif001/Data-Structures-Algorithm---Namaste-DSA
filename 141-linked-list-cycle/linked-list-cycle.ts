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

/* 
The Below approach works fine but its has
Time COmplexity : O(n)
Space Complexity : O(n)

We have to bring Space Complexity to O(1)
*/
// function hasCycle(head: ListNode | null): boolean {
//     /**
//     1. Early Return if linked list is empty meaning no head
//     2. Create a Set Map
//     3. Traverse through each node and append the node in the set map
//     4. Check if the node already exist in the map
//     5. If yes then return true else false
//      */

//      if(!head) return false;
//      const seenNodes = new Set();
//      let curr = head;

//      while( curr!=null){
//         if(seenNodes.has(curr)) return true
//         seenNodes.add(curr)
//         curr = curr.next;
//      }

//      return false

// };


// Now We will be using Space Complexity O(1) with Flyod's cycle Algo
function hasCycle(head: ListNode | null): boolean {
    /**
    Floyd's Cycle algo says if two pointers going in a circle and one is slower and one is faster
    then after couple of laps faster will have done more lapse but single will be done with onl one or 2
    which means at some point they will collide which infers that  both are colliding meaning is a repeatition
    mean
     */

    if(!head) return false;
    let slow = head;
    let fast = head;

    while(fast && fast.next){
     
        slow = slow.next;
        fast = fast.next.next;

           if(slow === fast) return true
    }

    return false

};
