/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let left = 1;
    let right = n;

    while(left<=right){
        let middle = Math.floor(left + (right-left)/2);
        let guessedNum = guess(middle)
        if(guessedNum === 0){
            return middle;
        }
        else if(guessedNum === -1){
            right = middle - 1
        }else{
            left = middle + 1
        }
    }
};