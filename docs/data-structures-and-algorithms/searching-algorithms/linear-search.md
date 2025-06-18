---
sidebar_position: 1
---

# Linear Search

Linear Search is one of the simplest and most intuitive algorithms used to find an element in a list or array. It checks each element **sequentially** until the desired value is found or the list ends.

---

## 🔍 How Linear Search Works

Given a list of elements, linear search goes from **left to right**, comparing each element with the target. If a match is found, it returns the index. Otherwise, it returns -1.

---

## 📊 Example

Let's say we have the following array:

```

[5, 2, 9, 4, 7]

````

We want to search for the element `4`.

### Step-by-step:

1. Compare 5 with 4 → ❌
2. Compare 2 with 4 → ❌
3. Compare 9 with 4 → ❌
4. Compare 4 with 4 → ✅ Match found at index `3`

---

## 🔧 Go Implementation

Here’s a simple Go program that performs linear search:

```go
package main

import "fmt"

func linearSearch(arr []int, target int) int {
    for i, val := range arr {
        if val == target {
            return i
        }
    }
    return -1 // Not found
}

func main() {
    nums := []int{5, 2, 9, 4, 7}
    target := 4

    index := linearSearch(nums, target)
    if index != -1 {
        fmt.Printf("Element found at index %d\n", index)
    } else {
        fmt.Println("Element not found")
    }
}
````

---

## 🧪 Output

```
Element found at index 3
```

---

## ⏱ Time and Space Complexity

| Case       | Time Complexity |
| ---------- | --------------- |
| Best Case  | O(1)            |
| Average    | O(n)            |
| Worst Case | O(n)            |

* **Space Complexity**: O(1)

---

## ✅ When to Use Linear Search

* When the dataset is **unsorted**
* When the list is **small**
* When performance isn’t a primary concern
* When you want a **quick and simple** solution

---

## 🔚 Conclusion

Linear search is a basic yet powerful algorithm, ideal for simple scenarios or when working with small, unsorted data. Though not the most efficient for large datasets, it’s a great starting point when learning how search algorithms work.

---

You can view and clone the full code from my GitHub repo here:
👉 [Linear Search in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/searching_algorithms/linear_search.go)

---

Happy Learning! 🚀

