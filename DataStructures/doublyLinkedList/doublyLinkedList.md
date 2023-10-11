### Doubly Linked List
Almost identical to Singly Linked Lists, except every node has another pointer to the previous node.

## Pseudocode
# Part 1: Push
Add new node to end of list
- Create a new node with the value passed into the function
- If the head is null, set the head and tail to be the new Node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created Node
- Increment the length
- Return the list

## Part 2: Pop
Remove last node from list
- If there is no head, return undefined
- Store the current tail in a variable to return
- If length is 1, set the head and tail to be null
- Update the tail to be the previous Node
- Set the new Tail's next to null
- Decrement length
- Return removed Node

## Part 3: Shift
Removing a Node from the beginning of the list
- If length is 0 or there is no head return undefined
- Store the current head property in a variable called oldHead
- If the length = 1
  - set the head to null
  - set the tail to null
- Update the head to be the next of the old head
- Set the head's prev property to null
- Set the old head's next to null
- Decrement the length
- Return oldHead
