type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            return false
        }
    }

    return true
};