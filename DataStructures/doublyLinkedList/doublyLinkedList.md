# Doubly Linked List
Almost identical to Singly Linked Lists, except every node has another pointer to the previous node.

## Pseudocode
## Part 1: Push
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

## Part 4: Unshift
Adding a Node to the beginning of the list
- Create a new node from the value passed to the method
- If the length is 0
  - Set the head to be the newNode
  - Set the tail to be the newNode
- Otherwise
  - Set the previous property on the head of the list to be the newNode
  - Set the next property on the newNode to be the head property
  - Update the head to be the newNode
- Increment the length
- Return the list

## Part 5: Get
Accesing a node in a list by its position
- If the index is less than 0 or greater than or equal to the length, return null
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and loop towards the middle
  - Return the node once it is found
- If the index is greater than half the length of the list
  - Loop through the list starting from the tail and loop towards the middle
  - Return the Node once found

## Part 6: Set
Replacing the value of a node in a list
- Create a variable which is the result of the get method at the index passed to the method
  - If the get method returns a valid node, set the value of that node to be the value passed in
  - Return true

## Part 7: Insert
Adding a Node in a list by a certain position
- If the index is less than 0 or greater than or equal to the length return false
- if the index is 0, **unshift**
- If the index is the same as the length, **push**
