function maxFreqSum(s: string): number {
    let vowels = new Set(['a','e','i','o','u'])
    let vowelSet = {};
    let consonantSet = {};

    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vowelSet[s[i]] = (vowelSet[s[i]] || 0) + 1
        }
        else {
            consonantSet[s[i]] = (consonantSet[s[i]] || 0) + 1
        }
    }

    let maxVowelCount = Math.max(...Object.values(vowelSet)  as number[],0);
    let maxConsonantCount = Math.max(...Object.values(consonantSet)  as number[],0)

    return maxVowelCount + maxConsonantCount
};