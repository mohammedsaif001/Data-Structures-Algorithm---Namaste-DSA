function maxArea(arr: number[]): number {
    let i = 0;
    let j = arr.length - 1;
    let maxArea = 0;
    while (i < j) {
        // Height of lowest line * width of i and j pointers
        let area = Math.min(arr[i], arr[j]) * (j - i);
        maxArea = Math.max(area, maxArea)

        if (arr[i] < arr[j]) {
            i++;
        } else {
            j--
        }
    }

    return maxArea
};