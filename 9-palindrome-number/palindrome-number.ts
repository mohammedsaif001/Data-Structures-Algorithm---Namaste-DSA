var isPalindrome = function(n) {
    if(n<0) return false
    let x = n
    let reversedNum = 0;

    // Checking for constraints
    const limit = Math.pow(2,31)
    if(n<=-limit || n>=limit-1) return false

    while(n>0){
        let lastDigit = Math.floor(n%10);
        reversedNum = (reversedNum*10)+lastDigit
        n= Math.floor(n/10)
    }
    return reversedNum === x
};