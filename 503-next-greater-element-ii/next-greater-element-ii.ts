// function nextGreaterElements(nums: number[]): number[] {
//     // 1st Approach by doubling the array

//     let arr = new Array(nums.length*2).fill(-1)
//     let doubledArray = [...nums,...nums];
//     let stack = [];
    
//     for(let i=doubledArray.length-1;i>=0;i--){
//         while(stack.length){
//             let top = stack[stack.length-1]
//             if(top<=doubledArray[i]){
//                 stack.pop();
//             }else{
//                 arr[i] = top
//                 break;
//             }
//         }

//         stack.push(doubledArray[i])
//     }

//     return arr.slice(0,nums.length)
// };

function nextGreaterElements(nums: number[]): number[] {
    // 2nd Approach by doubling only the indexes

    let n = nums.length
    let arr = new Array(n).fill(-1)
    let stack = [];
    
    for(let i=(2*n)-1;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1]
            if(top<=nums[i%n]){
                stack.pop();
            }else{
                arr[i%n] = top
                break;
            }
        }

        stack.push(nums[i%n])
    }

    return arr
};