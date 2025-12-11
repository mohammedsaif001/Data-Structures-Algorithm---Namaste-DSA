function isPalindrome(s: string): boolean {
    s = s.trim().toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)){ // Check If i pointer is non alphanumeric then skip the curr element
            ++i;
        } 
        else if (!s[j].match(/[a-z0-9]/i)){ // Check If j pointer is non alphanumeric then skip the curr element
            --j;
        } 
        else if (s[i] === s[j]) { // If Both i & j pointer is alphanumeric and both are equal 
            ++i; --j;
        } 
        else {
            return false
        }
    }

    return true
};