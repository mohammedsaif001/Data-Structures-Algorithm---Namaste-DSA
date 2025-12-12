function groupAnagrams(strs: string[]): string[][] {
    let map = {}
    for(let i=0;i<strs.length;i++){
        let currWord = strs[i].split('').sort().join('');
        if(map[currWord]) map[currWord].push(strs[i]);
        else map[currWord] = [strs[i]]
    }

    return Object.values(map)
};