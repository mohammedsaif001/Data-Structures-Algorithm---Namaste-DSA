function nextGreaterElements(nums: number[]): number[] {
    // 1st Approach by doubling the array

    let arr = new Array(nums.length*2).fill(-1)
    let doubledArray = [...nums,...nums];
    let stack = [];
    
    for(let i=doubledArray.length-1;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1]
            if(top<=doubledArray[i]){
                stack.pop();
            }else{
                arr[i] = top
                break;
            }
        }

        stack.push(doubledArray[i])
    }

    return arr.slice(0,nums.length)
};