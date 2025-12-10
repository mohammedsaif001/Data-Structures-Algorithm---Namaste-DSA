function maxFreqSum(s: string): number {
    let vowelSet: Record<string, number> = {};
    let consonentSet: Record<string, number> = {};

    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelSet[s[i]] = (vowelSet[s[i]] || 0) + 1;
        }else{
            consonentSet[s[i]] = (consonentSet[s[i]] || 0) + 1;
        }
    }

    return Math.max(...Object.values(vowelSet),0) + Math.max(...Object.values(consonentSet),0)
}
