---
slug: terminate-goroutines
title: How to terminate goroutines in golang
authors: shekhar-patil
tags: [golang, Design Pattern, Concurrency]
---

### How to terminate goroutines in golang?

#### Method 1: Using Channels to Signal Termination

```golang
package main

import (
	"fmt"
	"time"
)

func performTask(terminateChan <-chan bool) {
	for {
		select {
		case <-terminateChan:
			fmt.Println("Task terminated by channel")
			return
		default:
			fmt.Println("Task is running")
			time.Sleep(time.Second)
		}
	}
}

func main() {
	terminateChan := make(chan bool)

	go performTask(terminateChan)

	time.Sleep(5 * time.Second)
	terminateChan <- true
	time.Sleep(time.Second)
	fmt.Println("Main Goroutine exited")
}
```