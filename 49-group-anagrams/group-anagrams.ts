function groupAnagrams(strs: string[]): string[][] {
    let obj = {}
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sortedWord = word.split('').sort().join('');
        let arr = []
        if (!obj[sortedWord]) {
            obj[sortedWord] = [word]
        } else {
           obj[sortedWord].push(word)
        }
    }

    return Object.values(obj)
};