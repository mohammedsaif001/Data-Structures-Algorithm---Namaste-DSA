type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    const res = [];

    const helper = (arr, depth) => {
        for (const item of arr) {
            if (Array.isArray(item) && depth < n) {
                helper(item, depth + 1)
            } else {
                res.push(item)
            }
        }

        return res
    }

    return helper(arr, 0);
};