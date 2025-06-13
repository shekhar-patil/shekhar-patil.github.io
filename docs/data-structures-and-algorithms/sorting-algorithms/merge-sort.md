---
sidebar_position: 5
---

# Merge Sort

Merge Sort is a highly efficient, comparison-based, divide-and-conquer sorting algorithm. It divides the array into halves, recursively sorts each half, and then merges the sorted halves back together.

Unlike simpler algorithms (Bubble, Insertion, Selection), Merge Sort offers significantly better performance on larger datasets due to its O(n log n) time complexity.

---

## 🧠 Algorithm Explanation

1. Divide the array into two halves.
2. Recursively sort each half.
3. Merge the two sorted halves into a single sorted array.

The key idea is that merging two sorted arrays can be done efficiently in linear time.

---

## 💻 Go Implementation

```go
package main

import "fmt"

// Merge merges two sorted slices into a single sorted slice.
func Merge(left []int, right []int) []int {
    i := 0
    j := 0
    result := []int{}

    for i < len(left) && j < len(right) {
        if left[i] < right[j] {
            result = append(result, left[i])
            i++
        } else {
            result = append(result, right[j])
            j++
        }
    }

    // Append remaining elements (if any)
    result = append(result, left[i:]...)
    result = append(result, right[j:]...)

    return result
}

// MergeSort performs merge sort on the input slice.
func MergeSort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }

    mid := len(arr) / 2
    left := MergeSort(arr[:mid])
    right := MergeSort(arr[mid:])

    return Merge(left, right)
}

func main() {
    arr := []int{10, 2, 5, 3, 1, 7, 0}
    fmt.Println(MergeSort(arr))
}
````

---

## 📈 Time and Space Complexity

| Case         | Time Complexity |
| ------------ | --------------- |
| Best Case    | O(n log n)      |
| Average Case | O(n log n)      |
| Worst Case   | O(n log n)      |

* **Space Complexity:** O(n) (because extra space is needed for merging).

---

## ✅ Advantages

* Consistent O(n log n) performance for all cases.
* Stable sort (maintains the relative order of equal elements).
* Well-suited for sorting linked lists and external sorting (huge data sets).

---

## ❌ Disadvantages

* Requires additional memory (O(n) extra space).
* Not in-place (unlike quick sort or heap sort).

---

## 🌍 Real-Life Examples

* **Large dataset sorting** (e.g. files, databases, external storage).
* **Linked lists sorting** (merge sort works very efficiently on linked lists).
* **Parallel sorting** (merge sort divides naturally into independent tasks).

---

Feel free to follow my work on GitHub: [Merge Sort in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/merge_sort.go)
