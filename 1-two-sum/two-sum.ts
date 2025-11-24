var twoSum = function(nums, target) {
    let a;
    let b;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                a = i;
                b = j;
                return [a, b]; // Return immediately after finding the pair
            }
        }
    }
    return []; // Return an empty array if no pair is found
};