---

sidebar_position: 1

---

# Stack

A Stack is a Last In, First Out (LIFO) data structure, meaning that the most recently added element is the first one to be removed.

![Stack](../../img/stack.jpg)

I have implemented a stack in Golang using interfaces, which enhances its flexibility by allowing it to handle multiple data types. In Go, interfaces enable us to define methods without specifying the exact types. By leveraging this feature, I created a generic stack that can store elements of any type, from integers and strings to more complex data types like structs.

This approach eliminates the need for multiple stack implementations for different types. Instead, the interface based design abstracts the stack’s functionality, ensuring type safety while maintaining reusability. The stack methods such as `Push`, `Pop`, and `Peek` can be applied universally, providing a seamless and efficient solution for various use cases in Golang.

```go
package main

import (
    "errors"
    "fmt"
)

// Stack defines the interface for stack operations using generics
type Stack[T any] interface {
    Push(data T) error
    Pop() (T, error)
    Peek() (T, error)
    IsEmpty() bool
    Size() int
}

// GenericStack is a concrete implementation of a stack for any data type
type GenericStack[T any] struct {
    items []T
}

// NewGenericStack creates and returns a new GenericStack
func NewGenericStack[T any]() *GenericStack[T] {
    return &GenericStack[T]{
        items: []T{},
    }
}

// Push adds an item to the top of the stack
func (s *GenericStack[T]) Push(data T) error {
    s.items = append(s.items, data)
    fmt.Println("Item", data, "Pushed to stack")
    return nil
}

// Pop removes and returns the top item from the stack
func (s *GenericStack[T]) Pop() (T, error) {
    if s.IsEmpty() {
        var zeroValue T
        return zeroValue, errors.New("pop failed: stack is empty")
    }
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    fmt.Println("Popped item:", item)
    return item, nil
}

// Peek returns the top item without removing it
func (s *GenericStack[T]) Peek() (T, error) {
    if s.IsEmpty() {
        var zeroValue T
        return zeroValue, errors.New("peek failed: stack is empty")
    }
    item := s.items[len(s.items)-1]
    fmt.Println("Top item is:", item)
    return item, nil
}

// IsEmpty checks if the stack is empty
func (s *GenericStack[T]) IsEmpty() bool {
    return len(s.items) == 0
}

// Size returns the number of items in the stack
func (s *GenericStack[T]) Size() int {
    return len(s.items)
}

// stackOperations demonstrates using the generic stack interface
func stackOperations[T any](s Stack[T], data []T) {
    // Pushing items
    for _, item := range data {
        if err := s.Push(item); err != nil {
            fmt.Println("Error pushing to stack:", err)
        }
    }

    // Displaying the top item
    if _, err := s.Peek(); err != nil {
        fmt.Println(err)
    }

    // Popping items
    for i := 0; i < len(data); i++ {
        if _, err := s.Pop(); err != nil {
            fmt.Println(err)
        }
    }

    // Attempt to pop from an empty stack
    if _, err := s.Pop(); err != nil {
        fmt.Println(err)
    }
}

func main() {
    // Create a new stack for integers
    s := NewGenericStack[int]()
    stackOperations(s, []int{10, 20, 30})

    // Create a new stack for strings
    strStack := NewGenericStack[string]()
    stackOperations(strStack, []string{"hello", "world"})
}


```

Happy Coding!
