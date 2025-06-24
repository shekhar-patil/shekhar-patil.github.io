---
sidebar_position: 1
---

# Kadane’s Algorithm

---

We're kicking off **Dynamic Programming** with one of the most popular algorithms: **Kadane’s Algorithm**, used to efficiently find the **maximum subarray sum**.

---

## ✅ Problem Statement

> Given an array of integers, find the **contiguous subarray (containing at least one number)** with the **maximum sum**, and return that sum.

**Example:**

```text
Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6
````

---

## 🚀 Kadane’s Algorithm – Intuition

Kadane’s Algorithm solves this problem in **O(n)** time with a simple yet powerful idea:

* Keep track of the **current subarray sum** as we iterate.
* Also maintain the **maximum sum** found so far.
* If the current sum becomes negative, reset it to 0 (since a negative sum won’t help in finding the maximum).

---

## 🔧 Implementation in Go (Golang)

```go
package main

import (
  "fmt"
  "math"
)

func maxSubArray(nums []int) int {
  maxSum := math.MinInt64
  sum := 0

  for i := 0; i < len(nums); i++ {
    sum += nums[i]

    if sum > maxSum {
      maxSum = sum
    }

    if sum < 0 {
      sum = 0
    }
  }

  return maxSum
}

func main() {
  arr := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
  fmt.Println("Maximum Subarray Sum:", maxSubArray(arr)) // Output: 6
}
```

---

## 🔍 How It Works

The core idea of Kadane’s Algorithm in this implementation is:

1. Initialize two variables:

   * `sum` → tracks the **current subarray sum**
   * `maxSum` → stores the **maximum sum found so far**

2. Iterate over each element:

   * Add the current number to `sum`
   * If `sum` becomes greater than `maxSum`, update `maxSum`
   * If `sum` drops below 0, reset `sum` to 0 (since a negative sum will only reduce the total if continued)

This helps us dynamically discard subarrays that hurt the total sum and only keep the most promising contiguous elements.

**In essence**:

> “Continue adding elements to the current subarray until it becomes harmful (negative). Once it does, drop it and start fresh.”


---

## 📈 Time & Space Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)` (constant space usage)

---

## 🧠 Real-World Applications

* 📈 Stock market profit analysis
* 🌡️ Anomaly detection in time series data
* 🎮 Scoring patterns in gaming analytics

---

## 🎯 Final Thoughts

Kadane’s Algorithm beautifully demonstrates how dynamic programming simplifies complex problems. It’s fast, efficient, and widely applicable.

---

## 🔗 GitHub Repository

👉 [Kadane’s Algorithm – Full Code](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/dynamic_programming/kandanes_algorithm.go)

---

## 🔁 Related Topics

* Dynamic Programming
* Sliding Window Techniques
* Prefix Sums

---

