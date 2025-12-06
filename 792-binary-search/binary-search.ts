function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    
    while(left<=right){
        let mid = left + Math.floor((right-left)/2);

        if(nums[mid]===target) return mid;
        if(target < nums[mid]) right = mid -1;
        else left = mid+1
    }

    return -1
};

// function search(nums: number[], target: number): number {
//     let left = 0;
//     let right = nums.length -1;


//     // if(nums[middle] === target) return middle;
//     // if(nums[middle]>target) return search(nums.slice(0,middle),target)
//     // return search(nums.slice(0),target)

//     while(right>=left){
//         let middle = Math.floor((left + right)/2)
//         if(nums[middle] === target) return middle;
//         if(target < nums[middle]){
//             right = middle-1;
//         }
//         else{
//             left = middle + 1;
//         }
//     }

//     return -1

// };