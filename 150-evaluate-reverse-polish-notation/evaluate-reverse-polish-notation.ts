function evalRPN(tokens: string[]): number {
    let stack = []
    const map = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => Math.trunc(b / a),
    }
    for (let i = 0; i < tokens.length; i++) {
        if (map[tokens[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[tokens[i]](Number(a), Number(b))
            stack.push(Math.trunc(ans))
        } else {
            stack.push(tokens[i]);
        }
    }

    return Number(stack.pop());
};

// function evalRPN(tokens: string[]): number {
//     let stack = []
//     let arr = ['+', '-', '*', '/']
//     for (let i = 0; i < tokens.length; i++) {
//         if (arr.includes(tokens[i])) {
//             let b = stack.pop();
//             let a = stack.pop();
//             let ans = eval(`${b} ${tokens[i]} ${a}`);
//             stack.push(Math.trunc(ans))
//         } else {
//             stack.push(tokens[i]);
//         }
//     }

//     return Number(stack.pop());
// };