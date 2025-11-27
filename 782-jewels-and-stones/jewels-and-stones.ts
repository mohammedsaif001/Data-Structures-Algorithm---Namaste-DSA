function numJewelsInStones(jewels: string, stones: string): number {
    let jewelSet = new Set();
    let count = 0;
     
    //  Creating a set
     for(let i=0;i<jewels.length;i++){
        jewelSet.add(jewels[i])
     }

     for(let i=0;i<stones.length;i++){
        if(jewelSet.has(stones[i])) ++count
     }

     return count
};