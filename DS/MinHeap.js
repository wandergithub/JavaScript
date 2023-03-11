/*
    MinHeap implementation
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getMin() {
    // Get the min element at index 0 in the heap array
    this.heap.shift();
  }

  insert(node) {
    // Node gets inserted last of the tree from left to right
    this.heap.push(node);

    // Move the node until it sucessfully satisfy MinHeap requirements:
    // Heap is a complete tree, exepting last level and goes from left to right.
    // All parents must be less than childs.
    if (this.heap.length > 1) {
      //If we have more nodes than the head. HeapifyUp
      let current_index = this.heap.length - 1;
      while (current_index > 0 && this.heap[Math.floor((current_index - 1) / 2)] > this.heap[current_index]) {
        [this.heap[Math.floor((current_index - 1) / 2)], this.heap(current_index)] = [this.heap(current_index), this.heap[Math.floor((current_index - 1) / 2)]];
        current_index = Math.floor((current_index - 1) / 2);
      }
    }
  }

  remove() {
    let smallest = this.heap[0];

    if (this.heap.length > 2) {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[0] > this.heap[1]) {
          [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
        }
        return smallest;
      }

      let current = 0;
      let leftChildIndex = current * 2 + 1;
      let rightChildIndex = current * 2 + 2;

      while (this.heap[leftChildIndex] && this.heap[rightChildIndex] && (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex])) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
          current = leftChildIndex
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2 + 1;
        rightChildIndex = current * 2 + 2;
      }
    }

    if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] < this.heap[current]) {
      [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
    }else if (this.heap.length === 2) {
      this.heap.splice(1, 1)
  } else {
      return null;
  }


  return smallest;
  }
  

}
