function findClosestElements(arr: number[], k: number, x: number): number[] {
    let left = 0;
    let right = arr.length - k ;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if ((arr[mid + k] - x) < (x - arr[mid])) left = mid + 1;
        else right = mid


    }

    return arr.slice(left, left + k)
};