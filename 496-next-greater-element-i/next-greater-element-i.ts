function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack = [];
    let map = {}

    // Adding Last Element As the max for that will be -1 as it doesnt exists
    let lastElement = nums2[nums2.length - 1]
    stack.push(lastElement)
    map[lastElement] = -1;

    for (let i = nums2.length - 2; i >= 0; i--) {
        while (stack.length) {
        let top = stack[stack.length - 1];
            if (top < nums2[i]) {
                stack.pop();
            } else {
                map[nums2[i]] = top;
                break;
            }
        }

        if (stack.length === 0) {
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i])

    }

    return nums1.map((item) => map[item])
};