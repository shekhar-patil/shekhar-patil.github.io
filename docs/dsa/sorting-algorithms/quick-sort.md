---

sidebar_position: 2
---

# Quick sort

```go
package main

import "fmt"

func Partition(arr []int, low int, high int) int {
    i := low + 1
    j := high
    pivot := arr[low]

    for i <= j {
        for i <= high && arr[i] <= pivot {
            i++
        }

        for j > low && arr[j] >= pivot {
            j--
        }
        if i < j {
            arr[i], arr[j] = arr[j], arr[i]
            i++
            j--
        }

    }

    arr[low], arr[j] = arr[j], arr[low]
    return j
}

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

Feel free to follow my work on GitHub: [Quick Sort in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/quick_sort.go).