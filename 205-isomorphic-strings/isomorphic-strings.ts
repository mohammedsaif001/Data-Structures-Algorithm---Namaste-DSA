function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let ST = {}
    let TS = {}

    for (let i = 0; i < s.length; i++) {
        let sLetter = s[i];
        let tLetter = t[i]

        // If No Key in ST and no key in TS then add
        if (!ST[sLetter] && !TS[tLetter]) {
            ST[sLetter] = tLetter;
            TS[tLetter] = sLetter;
        }
        // If St is present but the value is different like o->a already there so i cannot reassign o->r
        else if (ST[sLetter] !== tLetter) {
            return false
        }
    }

    return true
};