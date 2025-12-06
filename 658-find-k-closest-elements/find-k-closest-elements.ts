function findClosestElements(arr: number[], k: number, x: number): number[] {
    // 1. Its a sliding window problem
    // 2. Check if x - left is > mid + 1 if yes then move pointer left as its too far than the element


    let left = 0;
    let right = arr.length - k;

    while(left<right){
        let m = left + Math.floor((right-left)/2);

        if((arr[m+k] - x) < (x - arr[m])){
            left = m + 1
        }else{
            right = m;
        }
    }

    return arr.slice(left,left+k)
};