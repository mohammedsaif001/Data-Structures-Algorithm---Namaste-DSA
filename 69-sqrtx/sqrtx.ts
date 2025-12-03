function mySqrt(x: number): number {
    // Hint: The SqrRt will be around half of this number so we can use binary search

    if(x<2) return x
    let left = 2;
    let right = Math.floor(x/2);

    while(left<=right){
        let mid = Math.floor(left + ((right-left)/2));
        let pow =  Math.pow(mid,2)
        if(x === pow){
            return mid
        }
        else if(pow<x){
            left = mid+1
        }else{
            right = mid -1
        }
        
    }

    return  right
    
};