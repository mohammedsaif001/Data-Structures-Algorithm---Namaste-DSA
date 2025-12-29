function majorityElement(nums: number[]): number {

    // Use Voting Algo
    // Keep Increasing the freq if same value
    // Start reducing the freq if its not, if the freq becomes 0 then replace the element and assgn freq to 1
    let element = nums[0];
    let freq = 1;

    for(let i=1;i<nums.length;i++){
        if(nums[i]===element){
            ++freq
        }
        else{
            --freq;
            if(freq===0){
                freq=1;
                element = nums[i]
            }
        }
    } 

    return element
};