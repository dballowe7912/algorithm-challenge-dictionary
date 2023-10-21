# Graphs
---
## Undirected Graph
### Part 1: Add Vertex
- Write a method called `addVertex` which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
```js
graph.addVertex("Tokyo") // { "Tokyo": [] }
```
### Part 2: Add Edge
- The function should accept two vertices, we can call them `vertex1` and `vertex2`
- The function should find in the adjacency list the key of `vertex1` and push `vertex2` to the array
- The function should find in the adjacency list the key of `vertex2` and push `vertex1` to the array
- Don't worry about handling errors or invalid verticies
```js
graph.addEdge("Tokyo", "Dallas")
/*
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo"]
}
*/
```
### Part 3: Removing an Edge
- This function should accept two vertices we will call them `vertex1` and `vertex2`
- The function should reassign the key of `vertex1` to be an array that does not contain `vertex2`
- The function should reassign the key of `vertex2` to be an array that does not contain `vertex1`
- Don't worry about handling errors or invalid vertices

---
