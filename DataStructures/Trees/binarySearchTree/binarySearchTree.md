# Binary Search Trees

## Part 1: Insert
- Create a new Node
- Start at the root
	- Check if there is a root, if not, the root now becomes the new Node
	- If root exists, check if the new Node value is greater than or less than the root
	- If it is greater
		- Check to see if there is a node to the right
			- If there is, move to that node and repeat steps
			- If there is not, add new Node as the right property
	- If it is less
		- Check to see if there is a node to the left
			- If there is, move to that node and repeat steps
			- If there is not, add new Node as the left property

## Part 2: Find
- Starting at the root
  - Check if there is a root, if not - we're done
  - If there is a root, check if value of the node is the value we are looking for
  - If not, check to see if the value is greater than or less than the value of root
  - If it is greater
    - Check to see if there is a node to the right
      - If so, move to that node and repeat these steps
      - If not, we're done searching
  - If it is less
    - Check to see if there is a node to the left
      - If so, move to that node and repeat these steps
      - If not, we're done searching
- Returns node if found, undefined if not

## Part 3: Contains
Same as the find method but returns true if Node is found and false if node value does not exist

## Part 4: Tree Traversal
### Breadth-first Search (BFS)
- Steps - Iteratively
  - Create a queue (this can be an array) and a variable to store the values of nodes visited
  - Place the root Node in the queue
  - Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued, add it to the queue
    - If there is a right property on the node dequeued, add it to the queue
  - Return the variable that stores the values

### Depth-first Search (DFS)
**PreOrder**
- Steps - Recursively
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - Push the value of the node to the variable that stores the values
    - If the Node has a left property, call the helper function with the left property on the Node
    - If the Node has a right property, call the helper function with the right property on the Node
  - Invoke the helper function with the current variable
  - Return the array of values

**PostOrder**
- Steps - Recursively
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
    - Push the value of the node to the variable that stores the values
    - Invoke the helper function with the current variable
  - Return the array of values

**InOrder**
- Steps - Recursively
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - Push the value of the Node to the variable that stores the values
    - If the node has a right property, call the helper function with the right property on the node
  - Invoke the helper function with the current variable
  - Return the array of values

## Big O Complexity
- **Insertion** O(log n)
- **Searching** O(log n)
