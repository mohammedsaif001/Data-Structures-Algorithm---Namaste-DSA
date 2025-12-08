function twoSum(arr: number[], target: number): number[] {
   let i =0;
   let j =  arr.length - 1;

   while(i<=j){
    let sum = arr[i] + arr[j]
    if(sum === target) return [i+1,j+1]
    if(sum>target) --j;
    else ++i
   }
};