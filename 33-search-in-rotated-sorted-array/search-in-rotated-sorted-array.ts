function search(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] <= arr[right]) {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (arr[mid] > target && target >= arr[left]) right = mid - 1;
            else left = mid + 1
        }
    }

    return -1
};