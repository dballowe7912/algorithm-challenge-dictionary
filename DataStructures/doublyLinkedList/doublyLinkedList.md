### Doubly Linked List
Almost identical to Singly Linked Lists, except every node has another pointer to the previous node.

## Pseudocode
# Part 1: Push
- Create a new node with the value passed into the function
- If the head is null, set the head and tail to be the new Node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created Node
- Increment the length
- Return the list
