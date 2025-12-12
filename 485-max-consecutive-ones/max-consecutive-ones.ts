function findMaxConsecutiveOnes(nums: number[]): number {
    let maxConsectiveOnes = 0;
    let currMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ++currMax
        }
        if (nums[i] === 0 || i === nums.length - 1) {
            maxConsectiveOnes = Math.max(currMax, maxConsectiveOnes);
            currMax = 0;
        }
    }

    return maxConsectiveOnes
};