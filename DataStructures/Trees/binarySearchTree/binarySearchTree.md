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
