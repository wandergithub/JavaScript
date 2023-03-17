const QuickSort = (array) => {
    // Base case
    // If array of numbers is less than 2 is already sorted
    if (array < 2) {
        return array;
    } else {
        var pivot = array[0]; //Take first element as pivot;
        var less = array.slice(1).filter(num => num < pivot); // All elements that are less than pivot
        var greater = array.slice(1).filter(num => num > pivot); // All elements that are greater than pivot
    }

    return [...QuickSort(less), pivot, ...QuickSort(greater)];
};