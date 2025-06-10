---
sidebar_position: 1
---

# Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the array is sorted.

Though not suitable for large datasets due to its quadratic time complexity, Bubble Sort is useful for educational purposes and for understanding the basics of sorting algorithms.

---

## 🧠 Algorithm (Go Implementation)

```go
package main

import (
 "fmt"
)

func BubbleSort(nums []int) {
    n := len(nums)

    for i := 0; i < n; i++ {
        swapped := false
        for j := 0; j < n-i-1; j++ {
            if nums[j] > nums[j+1] {
                swapped = true
                nums[j], nums[j+1] = nums[j+1], nums[j]
            }
        }

        if !swapped {
            break
        }
    }

    fmt.Println(nums)
}

func main() {
    nums := []int{10, 2, 5, 3, 1}
    BubbleSort(nums)
}
````

---

## 📈 Time and Space Complexity

| Case         | Time Complexity |
| ------------ | --------------- |
| Best Case    | O(n)            |
| Average Case | O(n²)           |
| Worst Case   | O(n²)           |

* **Best case** occurs when the array is already sorted (optimized by `swapped` flag).
* **Worst case** occurs when the array is sorted in reverse.
* **Space Complexity**: O(1) – in-place sorting.

---

Feel free to follow my work on GitHub: [Bubble Sort in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/bubble_sort.go)