function searchRange(arr: number[], target: number): number[] {
    let left = 0;
    let right = arr.length - 1;
    let ans = [-1, -1]

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (target > arr[mid]) left = mid + 1;
        else right = mid;
    }

    if (arr[left] === target) ans[0] = left;

    left = 0;
    right =  arr.length - 1;

    while (left < right) {
        let mid = left + Math.ceil((right - left) / 2);
        if (target >= arr[mid]) left = mid;
        else right = mid - 1
    }

     if (arr[left] === target) ans[1] = left;

     return ans
};