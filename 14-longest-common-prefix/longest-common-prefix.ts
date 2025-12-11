function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0];

    let firstWord = strs[0];

    for (let i = 0; i < firstWord.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstWord[i]) {
                return firstWord.slice(0, i);
            }
        }
    }

    return firstWord; // all matched
};