// function groupAnagrams(strs: string[]): string[][] {
//     let obj = {}
//     for (let i = 0; i < strs.length; i++) {
//         let word = strs[i];
//         let sortedWord = word.split('').sort().join('');

//         if (!obj[sortedWord]) {
//             obj[sortedWord] = [word]
//         } else {
//            obj[sortedWord].push(word)
//         }
//     }
//     return Object.values(obj)
// };

// Optimised Sultion below as the above will take too much time for sorting inbuild 
function groupAnagrams(strs: string[]): string[][] {
    let obj = {}
    for (let i = 0; i < strs.length; i++) {
        let arr = new Array(26).fill(0)
        let word = strs[i];

        for(let j=0;j<word.length;j++){
            let index = word[j].charCodeAt(0) - 'a'.charCodeAt(0)
            arr[index]++
        }
        
        const key = arr.join('#')


        if (!obj[key]) {
            obj[key] = []
        } 
           obj[key].push(word)
    }
    return Object.values(obj)
};
