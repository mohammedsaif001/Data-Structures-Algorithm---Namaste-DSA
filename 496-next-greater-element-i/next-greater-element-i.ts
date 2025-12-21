function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack = [];
    let map = {}

    let lastElement = nums2[nums2.length - 1]
    // Traversing Backwards because we need to find next grater element
    stack.push(lastElement)
    // Since last elemnt wont have any next greater so -1
    map[lastElement] = -1;

    for (let i = nums2.length - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > nums2[i]) {
                map[nums2[i]] = top;
                break;
            } else {
                stack.pop();
            }
        }

        if (stack.length === 0) map[nums2[i]] = -1;
        stack.push(nums2[i])
    }
    return nums1.map((item)=>map[item]);
};