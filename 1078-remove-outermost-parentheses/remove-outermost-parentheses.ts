function removeOuterParentheses(s: string): string {
    let stack = [];
    let ans = ''
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(s[i]);
            if(stack.length>1) ans+=s[i];
        }else{
            if(stack.length>1) ans+=s[i];
            stack.pop();
        }
    }

    return ans
};

// Using O(1) Time Complexity
// function removeOuterParentheses(s: string): string {
//     let ans = '';
//     let len = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             if (len > 0) ans += s[i]
//             ++len;
//         } else {
//             --len;
//             if (len > 0) ans += s[i]
//         }

//     }
//     return ans
// };