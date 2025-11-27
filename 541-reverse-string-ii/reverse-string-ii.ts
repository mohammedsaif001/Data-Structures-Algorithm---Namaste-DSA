function reverseStr(s: string, k: number): string {
    let arr = s.split('');

    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);

        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left ++;
            right--
        }
    }

    return arr.join('');
}
