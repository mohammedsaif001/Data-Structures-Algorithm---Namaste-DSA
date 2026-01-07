type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const res = [];
    let subArray = [];

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        subArray.push(arr[i]);
        if(count===size || i===arr.length-1){
            res.push(subArray);
            count = 0;
            subArray = []
        }
    }

    return res;
};

// function chunk(arr: Obj[], size: number): Obj[][] {
//     const res = [];
//     for(let i=0;i<arr.length;i+=size){
//         res.push(arr.slice(i,i+size))
//     }
//     return res;
// };
