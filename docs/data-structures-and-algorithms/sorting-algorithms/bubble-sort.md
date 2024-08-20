---

sidebar_position: 1
---

# Bubble Sort

```go
package main

import "fmt"

func BubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                temp := arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    fmt.Println(arr)
}

func main2() {
    arr := []int{10, 2, 5, 3, 1}
    BubbleSort(arr)
}
```

Feel free to follow my work on GitHub: [Bubble Sort in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/bubble_sort.go).