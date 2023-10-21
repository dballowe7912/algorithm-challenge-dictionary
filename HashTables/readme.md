# Hash Tables

## Part 1: Set
- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table array via seperate chaining

## Part 2: Get
- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
- If the key is not found, return undefined

---

## Hash Function Examples
```js
// Simple hash function
function hash(key, arrayLen) {
	let total = 0;
	for (let char of key) {
		// map 'a' to 1, 'b' to 2, 'c' to 3, etc.
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}
	return total;
}

// Same hash made faster
function hash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total + WEIRD_PRIME + value) % arrayLen;
	}
	return total;
}
```

---

## Hash Collisions
- Even with a large array and a great hash function, collisions are inevitable
- Dealing with collisions
	- Separate Chaining
		- At each index we store values using a more sophisticated data structure such as an array or linked list, which allows us to store multiple key pairs at the same index
	- Linear Probing
		- When we find a collision, we search through the array to find the next empty slot
		- This allows us to store a single key-value pair at each index

## Part 3: Keys and Values
- `keys` loops through the hash table array and returns an array of keys in the table
- `values` loops through the hash table and returns an array of values in the table

---

## Big O Complexity

- **Insert** O(1)
- **Deletion** O(1)
- **Access** O(1)

---
