function maxProfit(arr: number[]): number {
    let min = arr[0];
    let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - min
        if (diff > maxProfit) maxProfit = diff;
        if (arr[i] < min) min = arr[i]
    }

    return maxProfit
};