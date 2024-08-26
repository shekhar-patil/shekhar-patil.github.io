---

sidebar_position: 2
---
# Binary Search Tree

```go

package main

import (
    "errors"
    "fmt"
)

type Node struct {
    key   int
    value string
    right *Node
    left  *Node
}

func (n *Node) insert(key int, value string) {
    if n.key > key {
        if n.left == nil {
            n.left = &Node{key: key, value: value}
        } else {
            n.left.insert(key, value)
        }
    } else if n.key < key {
        if n.right == nil {
            n.right = &Node{key: key, value: value}
        } else {
            n.right.insert(key, value)
        }
    }
}

func (n *Node) inOrderPrint() {
    if n.left != nil {
        n.left.inOrderPrint()
    }

    fmt.Println("Key: ", n.key, ", Value: ", n.value)

    if n.right != nil {
        n.right.inOrderPrint()
    }
}

func (n *Node) searchValue(key int) (string, error) {
    if n == nil {
        return "", errors.New("Key not found")
    }

    if n.key == key {
        return n.value, nil
    }

    if key > n.key {
        if n.right == nil {
            return "", errors.New("Key not found")
        }
        return n.right.searchValue(key)
    } else {
        if n.left == nil {
            return "", errors.New("Key not found")
        }
        return n.left.searchValue(key)
    }
}

func main() {
    root := &Node{key: 10, value: "Mumbai"}

    root.insert(5, "Delhi")
    root.insert(2, "Kolkata")
    root.insert(3, "Pune")
    root.insert(9, "Nagpur")
    root.insert(13, "Bengaluru")
    root.insert(1, "Chennai")

    root.inOrderPrint()

    value, err := root.searchValue(20)

    if err == nil {
        fmt.Println("Key found, Value is: ", value)
    } else {
        fmt.Println(err)
    }
}

```
