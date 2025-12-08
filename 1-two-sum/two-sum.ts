function twoSum(arr: number[], target: number): number[] {
    let map = {}

    // Adding all the elements in the Map
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }

    // Iterate through array and check the difference if that difference value exists in map & the index is not same then return that index
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (diff in map && map[diff] !== i) {
            return [i, map[diff]]
        }
    }
};