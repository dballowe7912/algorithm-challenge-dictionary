### Singly Linked List
A data structure that contains a head, tail and length property.
Linked lists consists of nodes, and each node has a value and a pointer to another node.

## Part 1: Push Method
Pushes a new node onto the end of a Linked List
- should accept a value
- creates a new node using the value
- Edge case, if there is no head, set the node to be the head and tail
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- increment length by one

## Part 2: Pop Method
Removes the tail node from a Linked List
- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of removed node

## Part 3: Shift Method
Removes a node from the beginning of a Linked List
- If no nodes exist, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement length by 1
- Return the value of the removed node

## Part 4: Unshifting
Adds a new node to the beginning of a Linked List
- Method should accept a value to add
- Create a new node using said value
- If there is no head, set the head and tail to be this new node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length by 1
- Return linked list
