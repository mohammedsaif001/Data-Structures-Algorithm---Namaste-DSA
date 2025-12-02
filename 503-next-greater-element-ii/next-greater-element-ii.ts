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
