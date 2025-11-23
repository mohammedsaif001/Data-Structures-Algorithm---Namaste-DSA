/*
    MERGE SORT — STEP BY STEP

    1. If the array has 0 or 1 element, it is already sorted → return it.
    2. Find the middle index and split the array into two halves.
    3. Recursively sort the left half.
    4. Recursively sort the right half.
    5. Merge the two sorted halves:
         - Use two pointers to compare values from left & right.
         - Push the smaller value into a new array.
         - Continue until one side is exhausted.
    6. Append any remaining elements from left or right.
    7. Return the fully merged, sorted array.
*/

function sortArray(nums: number[]): number[] {
    if(nums.length<=1) return nums;
    const mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    return mergedSortArray(left,right);
};

function mergedSortArray(left:number[],right:number[]){
    let i = 0;
    let j = 0;
    let arr = [];

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            arr.push(left[i]);
            i++;
        }
        else{
            arr.push(right[j]);
            j++;
        }
    }

    return [...arr,...left.slice(i),...right.slice(j)];
}

/*
    BUBBLE SORT — STEP BY STEP

    1. Loop through the array multiple times.
    2. In each pass, compare adjacent elements.
    3. If the left element is bigger than the right, swap them.
    4. After each full pass, the largest element moves to the end.
    5. Reduce the inner loop range each pass because the last part becomes sorted.
    6. Continue until the whole array is sorted.
*/

function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


/*
    SELECTION SORT — STEP BY STEP

    1. For each index, assume it's the minimum element.
    2. Scan the rest of the array to find the true minimum.
    3. When found, swap it with the current index.
    4. Move to the next index and repeat.
    5. Each pass puts the smallest remaining element in the correct position.
    6. Continue until the entire array is sorted.
*/

function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

/*
    INSERTION SORT — STEP BY STEP

    1. Start from index 1 (first element is considered sorted).
    2. Take the current element as 'key'.
    3. Compare it with elements on its left.
    4. Shift all larger elements one position to the right.
    5. Insert the key at the correct sorted position.
    6. Repeat this for all elements until the array is fully sorted.
*/

function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
}