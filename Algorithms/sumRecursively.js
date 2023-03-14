function sum(array, result = 0) {
    if (array.length <= 0) {
        return result;
    }
    result = sum(array, result + array.pop())
    return result;
}

console.log(sum([1,3,5]))