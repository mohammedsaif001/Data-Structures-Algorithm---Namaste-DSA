function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let firstWord = strs[0];
    let subStr = "";

    for (let i = 0; i < firstWord.length; i++) {
        const char = firstWord[i];

        for (let j = 1; j < strs.length; j++) {
            const currWord = strs[j];

            // If index out of bounds or mismatch, return prefix so far
            if (i >= currWord.length || currWord[i] !== char) {
                return subStr;
            }
        }

        // All matched at this index → add char
        subStr += char;
    }

    return subStr;
}
