function threeSumClosest(nums: number[], target: number): number {
    let closestSum = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[right] + nums[left];
            if (Math.abs(sum - target) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            if(sum<target){
                left++
            }else if(sum>target){
                right--
            }else{
                return sum
            }

        }
    }

    return closestSum
};