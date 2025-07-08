---
sidebar_position: 3
---

# Binary Search

Have you ever looked for a word in a dictionary? You don’t start from the first page — you flip somewhere in the middle, check, and based on what you see, jump left or right. That’s exactly how **Binary Search** works.

It’s a super efficient way to find an element in a **sorted array**, and it's way faster than checking each item one by one.

---

## 🔍 How Binary Search Works

Here’s the idea:

- You start with a **sorted** list.
- Pick the **middle element** and compare it with the target.
- If it matches — great! 🎯
- If the target is smaller, you search the **left half**.
- If it’s larger, go to the **right half**.
- You repeat this until you either find the target or run out of elements.

Each time, you cut the search space in half — which is why it's so fast!

---

## ✨ Let's Take an Example

Say we have this array:

```

[0, 1, 2, 3, 4]

````

And we want to find `3`.

Here's how it goes:

1. Middle element is `2` → not a match
2. `3 > 2` → search in right half
3. Next middle is `3` → boom! found it ✅

So it took just **2 checks** instead of 5 — imagine how much time that saves with 1000s of elements!

---

## 🧑‍💻 Go Implementation

Here’s how you can write Binary Search in Go:

```go
package main

import "fmt"

// binarySearch returns the index of target if found, else -1
func binarySearch(nums []int, target int) int {
  low, high := 0, len(nums)-1

  for low <= high {
    mid := (high + low) / 2

    if nums[mid] == target {
      return mid
    }

    if nums[mid] > target {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

func main() {
  nums := []int{0, 1, 2, 3, 4}
  target := 3

  index := binarySearch(nums, target)

  if index != -1 {
    fmt.Printf("Element %d found at index %d\n", target, index)
  } else {
    fmt.Printf("Element %d not found in the array\n", target)
  }
}
````

---

## 🧪 Output

```
Element 3 found at index 3
```

---

## ⏱ Time & Space Complexity

| Case       | Time     |
| ---------- | -------- |
| Best Case  | O(1)     |
| Average    | O(log n) |
| Worst Case | O(log n) |

* **Space complexity** is **O(1)** (if iterative like above), or **O(log n)** for recursive version due to the call stack.

---

## ⚠️ Important Note

Binary Search only works if the array is **sorted**.
If it’s not sorted, it won’t work correctly — you might eliminate the part where your element actually exists.

---

## 🧠 When Should You Use It?

* ✅ When the data is **already sorted**
* ✅ When you need to search **frequently**
* ✅ When performance matters — because **log n** is fast!

---

## 🔗 GitHub Repo

You can check out the full code here:
👉 [Binary Search in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/searching_algorithms/binary_search.go)

