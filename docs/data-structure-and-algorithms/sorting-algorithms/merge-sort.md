---

sidebar_position: 2
---

# Merge Sort

```go
package main
import "fmt"

func Merge(left []int, right []int) []int {
    i := 0
    j := 0
    result := []int {};
    for (i < len(left) && j < len(right)) {
        if left[i] < right[j] {
            result = append(result, left[i])
            i++;
        } else {
            result = append(result, right[j])
            j++;
        }
    }

    if i < len(left) {
        result = append(result, left[i:]...)
    }

    if j < len(right) {
        result = append(result, right[j:]...)
    }

    return result;
}

func MergeSort(arr []int) []int {
    n := len(arr);
    mid := n / 2;
    if n <= 1 {
        return arr;
    } 

    left := MergeSort(arr[mid:])
    right := MergeSort(arr[:mid])

    return Merge(left, right);
}

func main() {
  arr := []int { 10, 2, 5, 3, 1, 7, 0 };
  fmt.Println(MergeSort(arr));
}
```

Feel free to follow my work on GitHub: [Merge sort in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/sorting_algorithms/merge_sort.go).