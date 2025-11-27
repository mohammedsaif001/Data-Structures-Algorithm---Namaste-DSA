function largestOddNumber(num: string): string {
    let str = ``
    for(let i=num.length-1;i>=0;i--){
        console.log(Number(num[i]))
        if(Number(num[i])%2!==0) {
            str = num.slice(0,i+1);
            break;
        }
    }
    return str
};