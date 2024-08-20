---

sidebar_position: 1
---

# Singly Linked List

```go
package main
import "fmt"

type Node struct {
  data int
  next *Node
}

type LinkedList struct {
  head *Node
}

func (list *LinkedList) insertNode(data int) {
  if (list.head == nil) {
    node := Node{ data: data }
    list.head = &node
  } else {
    ptr := list.head

    for (ptr.next != nil) {
      ptr = ptr.next
    }

    node := Node{ data: data }
    ptr.next = &node
  }
}

func (list *LinkedList) deleteNode(val int) {
  if (list.head == nil) {
    fmt.Println("List is empty")
  } else {
    if (list.head.data == val) {
      list.head = list.head.next
    } else {
      ptr := list.head

      for (ptr.next != nil && ptr.next.data != val) {
        ptr = ptr.next
      }

      if (ptr.next != nil) {
        ptr.next = ptr.next.next
      } else {
        fmt.Println("data not found")
      }
    }
  }
}

func (list *LinkedList) printList() {
  if  list.head == nil {
    fmt.Println("list is empty")
  } else {
    ptr := list.head
    fmt.Println("list data is as following\n");
    for ptr != nil {
      fmt.Print("-->", ptr.data);
      ptr = ptr.next
    }

    fmt.Println()
  }
}


func main() {
  list := LinkedList {}

  list.insertNode(10)
  list.deleteNode(10)
  list.insertNode(20)
  list.insertNode(30)
  list.printList()
  list.deleteNode(30)
  list.printList()
  list.insertNode(40)
  list.printList()
  list.deleteNode(30)
  list.printList()
}
```

Feel free to follow my work on GitHub: [Singly linked list in Go](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/data_structures/linked_list/golang/singly_linked_list.go).