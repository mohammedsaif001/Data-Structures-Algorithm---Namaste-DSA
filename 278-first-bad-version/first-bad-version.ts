/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1;
        let right = n;

        while(left<right){
            let mid = left + Math.floor((right-left)/2);
            const isBad = isBadVersion(mid);
            if(!isBad) left = mid + 1;
            else right = mid;
        }

        return left
    };
};