function trap(arr: number[]): number {
    // 1. Find the max Line on the left and take it as maxLeft (traverse from left to right)
    // 2. Find Max Line on Right and take is as maxRight (traverse from right to left)
    // 2. Calculate water which can contain on each level by thaking the min of left and righ and subtracting by it own value

    let maxLeft = [];
    maxLeft[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxLeft[i - 1]) {
            maxLeft[i] = arr[i]
        } else {
            maxLeft[i] = maxLeft[i - 1]
        }
    }


    let maxRight = [];
    maxRight[arr.length - 1] = arr[arr.length - 1]

    for (let j = arr.length - 2; j >= 0; j--) {
        if (arr[j] > maxRight[j + 1]) {
            maxRight[j] = arr[j]
        } else {
            maxRight[j] = maxRight[j + 1]
        }
    }

    let ans = 0;

    for(let i=0;i<arr.length;i++){
        // Calculate ans
        let currStorage = Math.min(maxRight[i],maxLeft[i]) - arr[i];

        // add it to my prev ans
        ans += currStorage
    }

    return ans
};