---

sidebar_position: 1
---
# Dijkstra's Algorithm

```go
package main

import (
  "container/heap"
  "fmt"
  "math"
)

type MinHeap []Node

type Node struct {
  vertex int
  dist   int
}

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i].dist < h[j].dist }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *MinHeap) Push(x any)        { *h = append(*h, x.(Node)) }
func (h *MinHeap) Pop() any {
  old := *h
  n := len(old)
  node := old[n-1]
  *h = old[:n-1]
  return node
}

func Dijkstra(edges [][][]int, start int) map[int]int {
  dist := make(map[int]int)
  for i := 0; i < len(edges); i++ {
    dist[i] = math.MaxInt32
  }
  dist[start] = 0

  // Min-heap to track the shortest distances
  minHeap := &MinHeap{}
  heap.Init(minHeap)
  heap.Push(minHeap, Node{vertex: start, dist: 0})

  visited := make(map[int]bool)

  for minHeap.Len() > 0 {
    node := heap.Pop(minHeap).(Node)
    if visited[node.vertex] {
      continue
    }
    visited[node.vertex] = true

    // Explore neighbors
    for _, neighbor := range edges[node.vertex] {
      dest, weight := neighbor[0], neighbor[1]
      newDist := dist[node.vertex] + weight
      if newDist < dist[dest] {
        dist[dest] = newDist
        heap.Push(minHeap, Node{vertex: dest, dist: newDist})
      }
    }
  }
  return dist
}

func main() {
  // Input graph in adjacency list format
  start := 0
  edges := [][][]int{
    {{1, 7}},          // Node 0 connects to Node 1 with weight 7
    {{2, 7}, {3, 20}}, // Node 1 connects to Node 2 with weight 7, Node 3 with weight 20
    {{3, 14}},         // Node 2 connects to Node 3 with weight 14
    {{4, 2}},          // Node 3 connects to Node 4 with weight 2
    {},                // Node 4 has no neighbors
    {},                // Node 5 has no neighbors
  }

  // Compute shortest paths
  distances := Dijkstra(edges, start)

  // Output the results
  fmt.Println("Shortest distances from source:", start)
  for vertex, distance := range distances {
    fmt.Printf("Vertex %d: %d\n", vertex, distance)
  }
}
```

Feel free to follow my work on GitHub: [Dijkstra Algorithm in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/graph_algorithms/dijkstra_algorithm.go).