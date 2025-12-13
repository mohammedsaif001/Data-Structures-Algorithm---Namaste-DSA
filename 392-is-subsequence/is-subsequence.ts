function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;;

    while (i < t.length) {
        if (t[i] === s[j]) {
            ++j;
        }
        ++i
    }

    return j === s.length
};