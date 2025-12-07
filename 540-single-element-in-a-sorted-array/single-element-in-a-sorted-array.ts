function singleNonDuplicate(arr: number[]): number {
    let left = 0;
    let right = arr.length - 1;

    while (left<right) {
        let mid = left + Math.floor((right - left) / 2);
        // Check if Pair Exists in left or right;
        if (arr[mid] === arr[mid - 1]) {
            // Check if its even or not from left if its even then it exists in left side of array
            let count = mid - left;
            if (count % 2 == 0) right = mid - 2
            else left = mid + 1
        } else if(arr[mid] === arr[mid + 1]){
            let count = right - mid;
            if (count % 2 == 0) left = mid + 2;
            else right = mid - 1
        }else{
            return arr[mid]
        }
    }

    return arr[left]
};