# Singly Linked List
A singly linked list is a data structure that consists of a series of nodes, each of which contains a value and a pointer to the next node in the list. The first node in the list is called the head, and the last node is called the tail. Singly linked lists are a simple and efficient way to store data that can be traversed in a forward direction only.

- Singly Linked Lists are an exellent alternative to arrays when insertion and deletion at the beginning are frequently required

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

## Part 5: Get
Retrieving a node by it's position in a Linked List.
- Method should accept an index
- If the index is less than zero or greater than or equal to the list's length, return null
- Loop through the list until you reach the index and return the node at that specific index

## Part 6: Set
Change the value of a node based on it's position in the Linked List
- Method should accept an index and a value
- Use the **get** method to find the specific node
- If node is not found, return false
- If node is found, update the value of that node and return true

## Part 7: Insert
Adding a node to a Linked List at a **specific** position
- create a new Node variable
- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list
- Otherwise use the **get** method and access the node at the index - 1
- Set the .next property on that node to be the newNode
- Set the .next property on the newNode to be the previous next
- Increment the length
- Return true

## Part 8: Remove
Removing a node from the Linked List at a specific location.
- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length - 1, use the pop method
- If the index is 0 use the shift method
- Else use the get method and access the node at the index - 1
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the removed node

## Part 9: Reverse
Reversing the Linked List **in place**
- Swap the head and the tail
- Create a variable called next
- Create a variable called prev
- Create a variable called node and initialize it to the head property
- Loop through the list
- Set next to be the next property on whatever node is
- Set the next property on the node to be whatever prev is
- Set prev to be the value of the node variable
- Set the node variable to be the value of the next variable

## Big O Complexity
- **Insertion** O(1)
- **Removal**
    - best case O(1)
    - worst case O(n)
- **Searching** O(n)
- **Access** O(n)

### Sources
[https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/]
