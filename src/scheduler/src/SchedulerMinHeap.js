

function push(heap,node) {
    const index = heap.length;
    heap.push(node);
    siftUp(heap,node,index);
}

function siftUp(heap,node,i) {
    let index = i;
    while(true) {
        const parentIndex = index - 1 >>> 1;
        const parent = heap[parentIndex];
        if(parent !== undefined && compare(parent,node) > 0) {
            heap[parentIndex] = node;
            heap[index] = parent;
            index = parentIndex;
        }else {
            return;
        }
    }
}

function siftDown(heap,node,i) {
    let index = i;
    const length = heap.length;
    while(index < length) {
        let leftIndex = (index + 1) * 2 - 1;
        let left = heap[leftIndex];
        let rightIndex = leftIndex + 1;
        let right = heap[rightIndex];

        if(left !== undefined && compare(left,node) < 0) {
            if(right !== undefined && compare(right,left) < 0) {
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
            }else {
               heap[index] = left;
               heap[leftIndex] = node;
               index = leftIndex; 
            }
        }
    }
}

function pop(heap) {
    const first = heap[0];
    if(first !==  undefined) {
        const last = heap.pop();
        if(first !== last) {
            heap[0] = last;
            siftDown(heap,last,0);
        }
    }
    return null;
}

function peek(heap) {
    const first = heap[0];
    return first;
}

function compare(a,b) {
    const diff = a.sortIndex - b.sortIndex;
    return diff;
}

export {
    pop,
    push,
    peek

}