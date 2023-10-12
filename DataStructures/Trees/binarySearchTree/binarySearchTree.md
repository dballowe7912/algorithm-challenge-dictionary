### Binary Search Trees

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

## Big O Complexity
- **Insertion** O(log n)
- **Searching** O(log n)
