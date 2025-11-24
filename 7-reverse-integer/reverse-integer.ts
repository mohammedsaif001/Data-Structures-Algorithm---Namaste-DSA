function reverse(x: number): number {
    const limit = Math.pow(2, 31);
    let xCopy = Math.abs(x);
    let reversedNum = 0;

   

    while (xCopy > 0) {
        const lastDigit = xCopy % 10
        reversedNum = (reversedNum * 10) + lastDigit;
        xCopy = Math.floor(xCopy / 10);
    }
    if(x<0) {
        reversedNum = -reversedNum
    }

     // Early Exit If Goes beyound Constraints
    if (reversedNum < -limit || reversedNum > limit) return 0;
    return reversedNum

};