// Mege Sort
function sortArray(nums: number[]): number[] {
    if(nums.length<=1) return nums;
    const mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    return mergedSortArray(left,right);
};

function mergedSortArray(left:number[],right:number[]){
    let i = 0;
    let j = 0;
    let arr = [];

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            arr.push(left[i]);
            i++;
        }
        else{
            arr.push(right[j]);
            j++;
        }
    }

    return [...arr,...left.slice(i),...right.slice(j)];
}