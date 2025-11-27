function findWordsContaining(words: string[], x: string): number[] {
    let res = []
    for(let i=0;i<words.length;i++){
        let currWord = words[i];
        for(let j=0;j<currWord.length;j++){
            if(currWord[j] === x){
                res.push(i)
                break;
            }
        }
    }

    return res
};