
    /*
      ------------------------------------------------------------
      EXAMPLE:
      s = "egg"
      t = "add"

      i=0: sLetter='e', tLetter='a'
        ST has no 'e' and TS has no 'a'
        → create mapping e -> a  and a -> e

      i=1: sLetter='g', tLetter='d'
        ST has no 'g' and TS has no 'd'
        → create mapping g -> d  and d -> g

      i=2: sLetter='g', tLetter='d'
        ST['g'] already exists and ST['g'] === 'd'
        → valid, continue

      End → isomorphic → return true

      ------------------------------------------------------------
      COUNTER EXAMPLE:
      s = "foo"
      t = "bar"

      i=0: f->b (new mapping, ok)
      i=1: o->a (new mapping, ok)
      i=2: o->r
         But ST['o'] already points to 'a'
         Now we want to map 'o' to 'r' → conflict → return false
      ------------------------------------------------------------
    */


function isIsomorphic(s: string, t: string): boolean {
    // If lengths differ, cannot be isomorphic
    if (s.length !== t.length) return false;

    let ST: Record<string, string> = {}; // map from s -> t
    let TS: Record<string, string> = {}; // map from t -> s

    for (let i = 0; i < s.length; i++) {
        let sLetter = s[i];
        let tLetter = t[i];

        // Case 1: No mapping exists yet in either dictionary → create one
        if (!ST[sLetter] && !TS[tLetter]) {
            ST[sLetter] = tLetter; // forward mapping
            TS[tLetter] = sLetter; // reverse mapping
        }
        // Case 2: A mapping exists but does not match the current character → inconsistent
        else if (ST[sLetter] !== tLetter) {
            return false;
        }
    }

    // All mappings were consistent → strings are isomorphic
    return true;
};
