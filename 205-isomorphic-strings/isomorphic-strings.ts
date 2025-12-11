function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let ST = {}
    let TS = {}

    for (let i = 0; i < s.length; i++) {
        let sLetter = s[i];
        let tLetter = t[i];

        if (!ST[sLetter] && !TS[tLetter]) {
            ST[sLetter] = tLetter;
            TS[tLetter] = sLetter;
        }
        else if (ST[sLetter] !== tLetter || TS[tLetter] !== sLetter) {
            return false
        }

    }

    return true
};