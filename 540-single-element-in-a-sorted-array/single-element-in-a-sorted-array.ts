function singleNonDuplicate(arr: number[]): number {
    // Since Every number has pair then if its a middle element than 
    // Eother Left or Right will have even number of length
    // Then Odd Side will contain the element
    // 1. Whether the pair exists on left or right
    // 2. Check Where is the odd or even pair
    // 3. If Pair exists on left of middle and its even then move right = mid - 2 (Extra one because the pair is already ther)
    // 4. ID pair exists on left of middle and its odd then move left pointer to mid +1
    // 5. Same check for Right Side as well

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === arr[mid + 1]) {
            if ((right - mid) % 2 === 0) {
                left = mid + 2
            } else {
                right = mid - 1
            }
        } else if(arr[mid] === arr[mid - 1]){
            if ((mid - left) % 2 === 0) {
                right = mid - 2;
            } else {
                left = mid + 1
            }
        }else{
            return arr[mid]
        }
    }
};