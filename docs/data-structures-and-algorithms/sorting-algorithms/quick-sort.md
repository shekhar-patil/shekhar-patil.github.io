---
sidebar_position: 6
---

# Quick Sort

Sorting algorithms are one of the most fundamental topics in computer science, and **Quick Sort** stands out as one of the most efficient and widely used sorting algorithms in practice. In this blog, we'll explore how Quick Sort works, walk through an example step-by-step, and then see a complete Go implementation.


## 🔎 How Quick Sort Works

Quick Sort is a **divide and conquer** algorithm that follows these main steps:

1️⃣ **Choose a pivot**
Select one element from the array as the pivot.

2️⃣ **Partition the array**
Rearrange the array so that:

* Elements smaller than the pivot are on the left.
* Elements larger than the pivot are on the right.

3️⃣ **Recursively apply Quick Sort**
Apply the same process to the left and right subarrays.

This process continues until the entire array is sorted.

---

## 📊 Step-by-Step Example

Let’s say we want to sort:

```
[1, 5, 2, 10, 30, -1, 4]
```

---

### Step 1: Choose Pivot

We pick the **first element** as pivot:
`pivot = 1`

---

### Step 2: Partition

We rearrange the elements so that:

* All elements `<= 1` go to the left
* All elements `>= 1` go to the right

While partitioning:

* Compare 5 with 1 → 5 is greater → stay right
* Compare 2 with 1 → 2 is greater → stay right
* Compare 10 with 1 → greater
* Compare 30 with 1 → greater
* Compare -1 with 1 → swap -1 with 5 → now array: `[1, -1, 2, 10, 30, 5, 4]`
* Compare 4 with 1 → greater

Finally, swap pivot with last smaller element (-1).
The array becomes:

```
[-1, 1, 2, 10, 30, 5, 4]
```

Now pivot `1` is at its correct sorted position (index 1).

---

### Step 3: Recursively Sort Left and Right Subarrays

* Left subarray: `[-1]` (already sorted)
* Right subarray: `[2, 10, 30, 5, 4]`

---

### Step 4: Repeat for Right Subarray

Take pivot: `2`
Partition → already sorted → no swaps needed.

* Left: empty
* Right: `[10, 30, 5, 4]`

---

### Step 5: Continue Recursion

Take pivot: `10`
Partition:

* Compare 30 → greater
* Compare 5 → swap with 30 → `[5, 30, 4]`
* Compare 4 → swap with 30 → `[5, 4, 30]`

Swap pivot `10` into correct position:
Result: `[4, 5, 10, 30]`

---

### Final Sorted Array:

```
[-1, 1, 2, 4, 5, 10, 30]
```

---

## 🧮 Complete Code in Go

Here’s the complete Go implementation of Quick Sort using **Hoare partitioning**:

```go
package main

import "fmt"

// Partition function using Hoare partitioning
func Partition(arr []int, low int, high int) int {
    i := low - 1
    j := high + 1
    pivot := arr[low]

    for {
        for {
            i++
            if arr[i] >= pivot {
                break
            }
        }

        for {
            j--
            if arr[j] <= pivot {
                break
            }
        }

        if i >= j {
            return j
        }

        arr[i], arr[j] = arr[j], arr[i]
    }
}

// Recursive QuickSort function
func QuickSort(arr []int, low int, high int) {
    if low < high {
        pivot := Partition(arr, low, high)
        QuickSort(arr, low, pivot-1)
        QuickSort(arr, pivot+1, high)
    }
}

func main() {
    arr := []int{1, 5, 2, 10, 30, -1, 4}
    n := len(arr)
    QuickSort(arr, 0, n-1)
    fmt.Println(arr)
}
```

---

## 🧪 Sample Output

```
[-1 1 2 4 5 10 30]
```

---

## ⏱ Time Complexity

| Case             | Time Complexity |
| ---------------- | --------------- |
| **Best case**    | O(n log n)      |
| **Average case** | O(n log n)      |
| **Worst case**   | O(n²)           |

✅ In practice, Quick Sort performs very well due to:

* Low memory overhead (in-place)
* Cache efficiency
* Fast average case behavior

---

## 🔥 Conclusion

Quick Sort is fast, elegant, and widely used in many real-world systems. Its divide-and-conquer approach combined with efficient in-place partitioning makes it highly effective for large datasets.

Make sure you not only memorize the algorithm but deeply understand **how partitioning works** — that’s the heart of Quick Sort.

---

## 💻 Complete Code Repository

👉 [Quick Sort in Go (GitHub)](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/quick_sort.go)
