

import { push,peek } from './scheduler/src/SchedulerMinHeap';

let heap = [];
push(heap,{sortIndex:1});
push(heap,{sortIndex:2});
push(heap,{sortIndex:3});
console.log(peek(heap));
push(heap,{sortIndex:4});
push(heap,{sortIndex:5});
push(heap,{sortIndex:0});
console.log(peek(heap));

console.log(heap);

