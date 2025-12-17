// function removeOuterParentheses(s: string): string {
//     let stack = [];
//     let ans = ''

//     for (let char of s) {
//         if (char === '(') {
//             stack.push(char);
//             if (stack.length > 1) ans += char;
//         }
//         else {
//             if (stack.length > 1) ans += char
//             stack.pop();
//         }
//     }

//     return ans
// };

// Using O(1) Time Complexity
function removeOuterParentheses(s: string): string {
    let ans = '';
    let len = 0;
    for (let char of s) {
        if (char === '(') {
            if (len > 0) ans += char;
            ++len;
        } else {
            --len;
            if (len > 0) ans += char
        }
    }

    return ans;
};