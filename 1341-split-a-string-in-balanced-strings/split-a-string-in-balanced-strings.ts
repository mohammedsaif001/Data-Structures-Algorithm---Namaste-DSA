function balancedStringSplit(s: string): number {
    let temp = 0;
    let count = 0;

    for(let i=0;i<s.length;i++){
        if(s[i]==='R'){
            ++temp;
        }else{
            --temp;
        }

        if(temp===0){
            ++count
        }
    }

    return count;
};