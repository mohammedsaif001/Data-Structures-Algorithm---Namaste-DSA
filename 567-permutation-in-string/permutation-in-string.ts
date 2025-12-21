function checkInclusion(subStr: string, str: string): boolean {
    let subHash = Array(26).fill(0);
    let strHash = Array(26).fill(0);

    let window_size = subStr.length;

    for (let i = 0; i < window_size; i++) {
        // Increase the substring hash
        let subIndex = subStr.charCodeAt(i) - 'a'.charCodeAt(0);
        subHash[subIndex]++

        // Increase main string hash intitally for the window
        let strIndex = str.charCodeAt(i) - 'a'.charCodeAt(0);
        strHash[strIndex]++
    }

    let left = 0;
    let right = window_size - 1;

    while (right < str.length) {
        if (subHash.join('_') === strHash.join('_')) return true
        else {
            // Slide the window delete the decrement the left pointer value and increase right pointer value
            strHash[str.charCodeAt(left) - 'a'.charCodeAt(0)]--;
            left++;
            right++;
            strHash[str.charCodeAt(right) - 'a'.charCodeAt(0)]++
        }
    }


    return false;
};