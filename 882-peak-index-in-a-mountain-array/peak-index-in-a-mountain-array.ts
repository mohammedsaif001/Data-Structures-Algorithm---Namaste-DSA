function peakIndexInMountainArray(arr: number[]): number {
    // Since its peak the next element will always be lower so check if a[m] is > a[m-1]

    let left = 0;
    let right = arr.length - 1;

    while(left<right){
        let mid = left + Math.floor((right-left)/2);


    // If the mid is lower than the peak should always be at right
        if(arr[mid]<arr[mid+1]) left = mid+1;
        else right = mid;  // If the mid is higher than next element check for max height
    }

    return left
};