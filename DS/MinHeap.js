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
      //If we have more nodes than the head.
      let current_index = this.heap.length - 1;
      while (current_index > 0 && this.heap[Math.floor(current_index - 1) / 2] > this.heap[current_index]) {
        [this.heap[Math.floor(current_index - 1) / 2], this.heap(current_index)] = [this.heap(current_index), this.heap[Math.floor(current_index - 1) / 2]];
        current_index = Math.floor(current_index - 1) / 2;
      }
    }
  }
}
