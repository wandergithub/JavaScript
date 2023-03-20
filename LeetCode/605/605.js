/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(array, n) {
    for (let index = 0; index < array.length; index++) {
        if(n <= 0) return true;
        let curr = array[index];
        let prev = array[index - 1];
        let next = array[index + 1];

        if (curr === 0 && (prev === undefined || prev === 0) && (next === 0 || next === undefined)) {
            array[index] = 1;
            n --;
        } 
    }
    if(n <= 0) return true;
    return false;
};

console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));
