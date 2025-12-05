function findMin(a: number[]): number {
    // Since its a rotates sorted array we have to find out the element whohc is smaller to its previous element
    //  Since its sorted wverything should be sorted except for one element return that
    let left = 0;
    let right = a.length - 1;

    while(left<=right){
        if(a[left]<=a[right]){
            return a[left]
        }

        let mid = left + Math.floor((right-left)/2);
        if(a[mid]<a[mid-1]) return a[mid];
        
        // Check For If its left sorted or right sorted check in the other side of sorted
        if(a[left]<=a[mid]){
            left = mid+1;
        }else{
            right = mid-1
        }
    }
};