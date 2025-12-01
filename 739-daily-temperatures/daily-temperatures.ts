function dailyTemperatures(arr: number[]): number[] {
    let stack = [];
    let n = arr.length
    let ans = new Array(n).fill(0)

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[top] <= arr[i]) {
                stack.pop();
            } else {
                ans[i] = top - i 
                break;
            }
        }
        if (stack.length === 0) {
            ans[i] = 0;
        }
        stack.push(i)
    }

    return ans

};