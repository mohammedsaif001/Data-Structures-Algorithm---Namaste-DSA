/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
        let temp = nums[x];
        nums[x] = nums[i]
        nums[i] = temp;
        x++
        }
    }
};