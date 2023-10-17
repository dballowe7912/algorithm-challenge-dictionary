# Priority Queue
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

## Pseudocode
- Write a Min Binary Heap - lower number means higher priority
- Each Node has a val and a priority, use the priority to build the heap
- **Enqueue** method accepts a value property, makes a new Node, and puts it in the right place based on its priority
- **Dequeue** method removes the root element, returns it, and rearranges the heap using priority
