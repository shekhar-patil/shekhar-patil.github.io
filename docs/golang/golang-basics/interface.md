---
sidebar_position: 3
---

# Interface

## Code implementation

```go
package main

import "fmt"

type Measurement interface {
    Area() float64
    Perimeter() float64
}

type Sqaure struct {
    length float64
}

type Rectangle struct {
    length float64
    breath float64
}

func (s *Sqaure) Area() float64 {
    return s.length * s.length
}

func (r *Rectangle) Area() float64 {
    return r.length * r.breath
}

func (s *Sqaure) Perimeter() float64 {
    return 4 * s.length
}

func (r *Rectangle) Perimeter() float64 {
    return 2 * (r.length + r.breath)
}

func measurements(m Measurement) {
    fmt.Println(m.Area())
    fmt.Println(m.Perimeter())
}

func main() {
    rect := Rectangle{length: 10, breath: 5}
    square := Sqaure{length: 10}

    measurements(&rect)
    measurements(&square)
}
```
