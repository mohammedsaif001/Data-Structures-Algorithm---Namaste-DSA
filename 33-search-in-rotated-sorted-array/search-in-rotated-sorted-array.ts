function search(a: number[], target: number): number {
    let left = 0;
    let right = a.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (a[mid] === target) return mid;

        // Right Sorted
        if (a[mid] <= a[right]) {

            // check if target is inside the right sorted half
            if (target > a[mid] && target <= a[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        } else {

            // Left Sorted

            // check if target is inside the left sorted half
            if (target < a[mid]  && target >= a[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
}
