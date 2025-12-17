function isValid(s: string): boolean {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        if (['(', '{', '['].includes(s[i])) {
            stack.push(s[i])
        }else{
            let pop = stack.pop()
            if(map[s[i]] !== pop) return false;
        }
    }

    return !stack.length
};