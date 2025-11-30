function removeOuterParentheses(s: string): string {
    let ans = '';
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (len > 0) ans += s[i]
            ++len;
        } else {
            --len;
            if (len > 0) ans += s[i]
        }

    }
    return ans
};