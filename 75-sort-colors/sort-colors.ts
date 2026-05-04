/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let zeroPos = 0;
    let curr = 0;
    let twosPos = nums.length -1;

    while(curr<=twosPos){
        if(nums[curr]===2){
            [nums[curr],nums[twosPos]] = [nums[twosPos],nums[curr]];
            twosPos--;
        }else if(nums[curr]===1){
            curr++;
        }else if(nums[curr]===0){
            [nums[curr],nums[zeroPos]] = [nums[zeroPos],nums[curr]]; // because only 1 could be here or 0
            curr++;
            zeroPos++
        }
    }
};