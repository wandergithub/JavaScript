// Decreasing order
const selectionSort = (array) => {
    let sortedArray = [];
    while (array.length > 0) {
        let greatest = 0;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element > greatest) {
                greatest = element;
            }
        }
        let index  = array.indexOf(greatest);
        sortedArray.push(array[index]);
        array.splice(index, 1); 
    }
    return sortedArray;
};
console.log(selectionSort([2,4,3,5,6,4,1]));
