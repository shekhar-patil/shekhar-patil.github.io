---
sidebar_position: 4
---

# Selection Sort

Selection Sort is a simple comparison-based sorting algorithm. It divides the input list into two parts: the sublist of items already sorted, which is built up from left to right, and the sublist of items remaining to be sorted.

In every iteration, the algorithm selects the smallest (or largest, depending on sorting order) element from the unsorted sublist and swaps it with the leftmost unsorted element, effectively growing the sorted list one element at a time.

Though not efficient for large datasets, Selection Sort is easy to understand and works well for small lists or educational purposes.

---

## 🧠 Algorithm Explanation

1. Start from index `0` and assume it's the minimum.
2. Loop through the rest of the list to find the actual minimum element.
3. Swap the found minimum with the element at index `i`.
4. Move to the next index and repeat the process until the array is sorted.

---

## 💻 Go Implementation

```go
package main

import (
  "fmt"
)

func selectionSort(nums []int) {
  n := len(nums)

  for i := 0; i < n; i++ {
    minIdx := i

    for j := i + 1; j < n; j++ {
      if nums[j] < nums[minIdx] {
        minIdx = j
      }
    }

    if minIdx != i {
      nums[minIdx], nums[i] = nums[i], nums[minIdx]
    }
  }
}

func main() {
  nums := []int{5, 6, 3, 8, 2, 1}
  selectionSort(nums)
  fmt.Println(nums)
}
````

---

## 📈 Time and Space Complexity

| Case         | Time Complexity |
| ------------ | --------------- |
| Best Case    | O(n²)           |
| Average Case | O(n²)           |
| Worst Case   | O(n²)           |

* **Best case and worst case have same complexity**, since selection sort always scans the unsorted part fully.
* **Space Complexity**: O(1) — In-place sorting.

---

## ✅ Advantages

* Very simple and easy to understand.
* Performs well on small datasets.
* In-place sorting (no extra memory required).
* Number of swaps is minimal (maximum `n - 1` swaps).

---

## ❌ Disadvantages

* Inefficient for large datasets.
* O(n²) time complexity even for already sorted data.
* Comparisons are always `n(n-1)/2` — no early exit optimization.

---

## 🌍 Real-Life Examples

* **Classroom sorting of physical objects** (e.g. arranging weights, numbers, or cards manually).
* **Small embedded systems** where simplicity is preferred over speed.
* Educational purposes for teaching sorting algorithms.

---

Feel free to follow my work on GitHub: [Selection Sort in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/selection_sort.go)

