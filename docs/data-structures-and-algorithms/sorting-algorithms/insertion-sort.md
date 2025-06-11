---
sidebar_position: 3
---

# Insertion Sort

Insertion Sort is a simple and intuitive comparison-based sorting algorithm. It builds the final sorted array one element at a time, by repeatedly picking the next element and inserting it into its correct position among the previously sorted elements.

Though not suitable for large datasets due to its quadratic time complexity, Insertion Sort is efficient for small datasets and nearly sorted arrays.

---

## 🧠 Algorithm (Go Implementation)

```go
package main

import (
	"fmt"
)

func insertionSort(nums []int) {
	for i := 1; i < len(nums); i++ {
		key := nums[i]
		j := i - 1

		for j >= 0 && nums[j] > key {
			nums[j+1] = nums[j]
			j--
		}
		nums[j+1] = key
	}
}

func main() {
	nums := []int{10, 2, 5, 3, 1}
	insertionSort(nums)
	fmt.Println(nums)
}
````

---

## 📈 Time and Space Complexity

| Case         | Time Complexity |
| ------------ | --------------- |
| Best Case    | O(n)            |
| Average Case | O(n²)           |
| Worst Case   | O(n²)           |

* **Best case**: When the array is already sorted.
* **Worst case**: When the array is sorted in reverse.
* **Space Complexity**: O(1) — In-place sorting.

---

## ✅ Advantages

* Simple and easy to implement.
* Efficient for small datasets.
* Performs well on nearly sorted arrays.
* Stable sort (maintains relative order of equal elements).
* In-place sorting (no extra memory required).

---

## ❌ Disadvantages

* Inefficient on large datasets.
* O(n²) time complexity for worst-case and average-case scenarios.

---

## 🌍 Real-Life Examples

* Sorting playing cards in your hand.
* Small datasets where simplicity is preferred.
* Useful in hybrid algorithms (e.g. Timsort).

---

Feel free to follow my work on GitHub: [Insertion Sort in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/insertion_sort.go)




