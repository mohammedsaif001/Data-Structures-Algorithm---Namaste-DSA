function missingNumber(nums: number[]): number {
    const n = nums.length;
    const totalSum = n*(n+1)/2 // Gives total Sum for all consecutive numbers
    let currSum = 0
    for(let i=0;i<n;i++){
        currSum=currSum + nums[i]
    } 

    return totalSum - currSum
};