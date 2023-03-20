# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
So I know that to place a flower I can't have any adjacent flowers. So my first thought is to track both sides of the index that im considering.
# Approach
<!-- Describe your approach to solving the problem. -->
So I know that to place a flower I can't have any adjacent flowers. So my first thought is to track both sides of the index that I'm considering.

I ended up going through all elements in the array, checking if they are valid places to consider if that's the case, I change the element to 1 and decrease n. If I satisfy n elements meaning (n <= 0) I can plant the flowers successfully, and return true.

So I can plant a flower if all of the following is true:
 `(
      curr === 0 &&
      (prev === undefined || prev === 0) &&
      (next === 0 || next === undefined)
    )`
1. curr === 0. No flowers are planted in the current place.
2. (prev === undefined || prev === 0) There isn't a flower on the preview location because it is empty 0 or undefined.
3. (next === 0 || next === undefined) There isn't a flower on the following location because it is empty 0 or undefined.


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
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
```