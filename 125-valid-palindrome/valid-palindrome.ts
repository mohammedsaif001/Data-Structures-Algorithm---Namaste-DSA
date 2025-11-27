function isPalindrome(s: string): boolean {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
            i++;
        }
        else if(!s[j].match(/[a-z0-9]/i)){
            j--;
        }
        else if(s[j]===s[i]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }

    return true
};