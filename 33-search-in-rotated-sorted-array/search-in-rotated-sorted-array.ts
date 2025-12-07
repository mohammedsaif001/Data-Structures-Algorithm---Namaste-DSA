function search(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] <= arr[right]) { // Check for right sorted array
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else { // Check for left sorted array
            if (arr[mid] > target && target >= arr[left]) // Lies in left sorted arrray
            {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
    }

    return -1
};                                                                                                                                                                                                                                                                                                                                                                   