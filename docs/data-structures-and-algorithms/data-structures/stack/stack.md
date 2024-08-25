---

sidebar_position: 1

---

# Stack 

```go
package main

import (
  "fmt"
)

type Stack struct {
  items []int
}

func (s *Stack) Push(item int) {
  fmt.Println(item, " has been pushed")
  s.items = append(s.items, item)
}

func (s *Stack) Pop() (int, error) {
  length := len(s.items)
  if length == 0 {
    return 0, fmt.Errorf("stack is empty")
  }

  num := s.items[length-1]
  s.items = s.items[:length-1]

  return num, nil
}

func (s *Stack) Peek() (int, error) {
  length := len(s.items)
  if length == 0 {
    return 0, fmt.Errorf("stack is empty")
  }

  num := s.items[length-1]
  return num, nil
}

func NewStack() *Stack {
  return &Stack{items: []int{}}
}

func main() {
  s := NewStack()

  s.Push(1)
  s.Push(2)
  s.Push(3)

  if num, err := s.Peek(); err == nil {
    fmt.Println("Top element is", num)
  } else {
    fmt.Println(err)
  }

  if num, err := s.Pop(); err == nil {
    fmt.Println(num, "has been popped")
  } else {
    fmt.Println(err)
  }

  if num, err := s.Peek(); err == nil {
    fmt.Println("Top element is", num)
  } else {
    fmt.Println(err)
  }

  if num, err := s.Pop(); err == nil {
    fmt.Println(num, "has been popped")
  } else {
    fmt.Println(err)
  }

  if num, err := s.Peek(); err == nil {
    fmt.Println("Top element is", num)
  } else {
    fmt.Println(err)
  }

  if num, err := s.Pop(); err == nil {
    fmt.Println(num, "has been popped")
  } else {
    fmt.Println(err)
  }

  if num, err := s.Peek(); err == nil {
    fmt.Println("Top element is", num)
  } else {
    fmt.Println(err)
  }

  if num, err := s.Peek(); err == nil {
    fmt.Println("Top element is", num)
  } else {
    fmt.Println(err)
  }
}
```