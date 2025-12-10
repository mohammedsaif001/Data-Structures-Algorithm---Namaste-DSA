function findWordsContaining(words: string[], x: string): number[] {
    let ans = []
    for(let i=0;i<words.length;i++){
        let currWord = words[i]
        for(let j=0;j<currWord.length;j++){
            if(currWord[j] === x){
                ans.push(i);
                break;
            }
        }
    }

    return ans;
};