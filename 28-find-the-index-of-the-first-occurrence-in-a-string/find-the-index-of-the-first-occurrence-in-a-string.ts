function strStr(haystack: string, needle: string): number {
    let hLength = haystack.length;
    let nLength = needle.length;
    let j = 0;

    for (let i = 0; i <= hLength - nLength; i++) {
        j = 0;
        for (j = 0; j < nLength; j++) {
            if (haystack[i + j] !== needle[j]) break;
        }

        if (j === nLength) return i
    }

    return -1
};