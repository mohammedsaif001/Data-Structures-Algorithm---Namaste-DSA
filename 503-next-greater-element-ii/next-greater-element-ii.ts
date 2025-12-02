// function nextGreaterElements(nums: number[]): number[] {
//     // Approach 1: Duplicate the array to simulate circular behavior.
//     // Example: [1,2,3] → [1,2,3,1,2,3]
//     // This lets us find next greater element by scanning backwards.

//     let arr = new Array(nums.length * 2).fill(-1); // Final result for doubled array
//     let doubledArray = [...nums, ...nums];         // Create circular version
//     let stack: number[] = [];                      // Monotonic decreasing stack
    
//     // Traverse the doubled array from right to left
//     for (let i = doubledArray.length - 1; i >= 0; i--) {

//         // Maintain a decreasing stack:
//         // Pop all elements <= current because they cannot be NGE
//         while (stack.length) {
//             let top = stack[stack.length - 1];

//             if (top <= doubledArray[i]) {
//                 stack.pop();      // Remove smaller or equal elements
//             } else {
//                 // The first greater element on right side
//                 arr[i] = top;
//                 break;
//             }
//         }

//         // Push current element for future comparisons
//         stack.push(doubledArray[i]);
//     }

//     // Only return next greater for original index range (0..n-1)
//     return arr.slice(0, nums.length);
// }


function nextGreaterElements(nums: number[]): number[] {
    // Approach 2: Do NOT physically duplicate array.
    // Instead, loop index from (2*n - 1) down to 0.
    // Use modulo (i % n) to simulate circular access.
    // Saves memory and is more optimal.

    let n = nums.length;
    let arr = new Array(n).fill(-1);  // Final answer
    let stack: number[] = [];          // Monotonic decreasing stack

    // Loop from 2n-1 down to 0 to cover circular array twice
    for (let i = (2 * n) - 1; i >= 0; i--) {
        let idx = i % n;               // Circular index in nums[]

        // Remove all elements <= current because they can't be NGE
        while (stack.length) {
            let top = stack[stack.length - 1];

            if (top <= nums[idx]) {
                stack.pop();
            } else {
                // First greater element to the right in circular array
                arr[idx] = top;
                break;
            }
        }

        // Push current element for future next-greater checks
        stack.push(nums[idx]);
    }

    return arr;
}
