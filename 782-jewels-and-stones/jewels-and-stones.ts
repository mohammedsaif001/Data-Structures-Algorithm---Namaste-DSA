function numJewelsInStones(jewels: string, stones: string): number {
    let set = new Set();
    let count = 0;

    for (let i = 0; i < jewels.length; i++) {
        set.add(jewels[i])
    }

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) ++count;
    }


    return count;
};