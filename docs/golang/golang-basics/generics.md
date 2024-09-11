---
sidebar_position: 4
---

# Generics

Generics in golang allows you to write flexible and reusable code which can handle multiple data type without compromising the type safety.

Here’s a practical example of generics in action in Go.

```go
package main

import (
    "fmt"
)

type Num interface {
    int | float64
}

func mapValues[T Num](input []T, transformFunc func(values []T) []T) []T {
    return transformFunc(input)
}

func main() {
    // Example with integers
    intList := []int{1, 2, 3}
    multipliedInts := mapValues(intList, func(values []int) []int {
        result := []int{}
        for _, value := range values {
            result = append(result, value*3)
        }
        return result
    })

    fmt.Println(multipliedInts)

    // Example with float64
    floatList := []float64{1.4, 2.6, 3.2}
    multipliedFloats := mapValues(floatList, func(values []float64) []float64 {
        result := []float64{}
        for _, value := range values {
            result = append(result, value*3)
        }
        return result
    })

    fmt.Println(multipliedFloats)
}

```

Happy coding!
