function searchRange(a: number[], target: number): number[] {
    let left = 0;
    let right = a.length - 1;
    let arr = [-1, -1];

    // Have 2 loops to find left element and right element

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (target > a[mid]) {
            left = mid + 1
        } else {
            right = mid;
        }
    }

    if (a[left] === target) arr[0] = left;

    left = 0;
    right = a.length - 1;

    while (left < right) {
        let mid = left + Math.ceil((right - left) / 2);

        if (target < a[mid]) {
            right = mid - 1
        } else {
            left = mid;
        }
    }
    if (a[left] === target) arr[1] = left;

    return arr
};