function isAnagram(s: string, t: string): boolean {
    if(s.length!==t.length) return false;
    let map = {};

    for(let i=0;i<s.length;i++){
        map[s[i]] =  (map[s[i]] || 0) + 1
    }

    
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) return false;  
        map[t[i]]--;                    
    }
    return true
};