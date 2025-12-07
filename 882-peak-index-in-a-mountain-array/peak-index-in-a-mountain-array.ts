function peakIndexInMountainArray(arr: number[]): number {
    let left = 0;
    let right = arr.length - 1;

    while(left<right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid]>arr[mid+1]) right = mid;
        else left = mid+1

    }

    return right
};