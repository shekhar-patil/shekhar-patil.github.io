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

Following approach is more generic.

```go
package main

import (
    "errors"
    "fmt"
)

// Stack defines the interface for stack operations
type Stack interface {
    Push(data int) error
    Pop() (int, error)
    Peek() (int, error)
    IsEmpty() bool
    Size() int
}

// IntStack is a concrete implementation of a stack for integers
type IntStack struct {
    items []int
}

// NewIntStack creates and returns a new IntStack
func NewIntStack() *IntStack {
    return &IntStack{
        items: []int{},
    }
}

// Push adds an item to the top of the stack
func (s *IntStack) Push(data int) error {
    s.items = append(s.items, data)
    fmt.Println("Item", data, "Pushed to stack")
    return nil
}

// Pop removes and returns the top item from the stack
func (s *IntStack) Pop() (int, error) {
    if s.IsEmpty() {
        return 0, errors.New("pop failed: stack is empty")
    }
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    fmt.Println("Popped item:", item)
    return item, nil
}

// Peek returns the top item without removing it
func (s *IntStack) Peek() (int, error) {
    if s.IsEmpty() {
        return 0, errors.New("peek failed: stack is empty")
    }
    item := s.items[len(s.items)-1]
    fmt.Println("Top item is:", item)
    return item, nil
}

// IsEmpty checks if the stack is empty
func (s *IntStack) IsEmpty() bool {
    return len(s.items) == 0
}

// Size returns the number of items in the stack
func (s *IntStack) Size() int {
    return len(s.items)
}

// stackOperations demonstrates using the stack interface with better error handling
func stackOperations(s Stack) {
    // Pushing items
    if err := s.Push(10); err != nil {
        fmt.Println("Error pushing to stack:", err)
    }

    // Displaying the top item
    if _, err := s.Peek(); err != nil {
        fmt.Println(err)
    }

    // Popping items
    if _, err := s.Pop(); err != nil {
        fmt.Println(err)
    }

    // Attempt to pop from an empty stack
    if _, err := s.Pop(); err != nil {
        fmt.Println(err)
    }
}

func main() {
    // Create a new stack
    s := NewIntStack()

    // Perform stack operations
    stackOperations(s)
}

```
