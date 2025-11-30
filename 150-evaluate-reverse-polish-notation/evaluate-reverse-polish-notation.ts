function evalRPN(tokens: string[]): number {
    let stack = []
    let arr = ['+', '-', '*', '/']
    for (let i = 0; i < tokens.length; i++) {
        if (arr.includes(tokens[i])) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = eval(`${b} ${tokens[i]} ${a}`);
            stack.push(Math.trunc(ans))
        } else {
            stack.push(tokens[i]);
        }
    }

    return Number(stack.pop());
};