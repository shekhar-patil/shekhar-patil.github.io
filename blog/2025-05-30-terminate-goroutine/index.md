---
slug: terminate-goroutines
title: How to Terminate Goroutines in Go
authors: shekhar-patil
tags: [golang, Design Pattern, Concurrency]
---

This week, I explored goroutines in more depth, particularly focusing on how to terminate them gracefully.

### How to Terminate Goroutines in Go?

In Go, goroutines cannot be forcefully killed. Instead, they should be terminated **gracefully and in a controlled manner**.

You can achieve this using mechanisms such as **channels**, **context**, or a **shared flag**. Among these, using `context` is the most recommended and idiomatic way.
<!--truncate-->
---

### Method 1: Using `context.Context`

Use `context.WithCancel` when you want to manually signal cancellation. When `cancel()` is called, all goroutines observing that context will receive a signal via `<-ctx.Done()`.

```go
package main

import (
    "context"
    "fmt"
    "sync"
    "time"
)

func worker(ctx context.Context, wg *sync.WaitGroup) {
    defer wg.Done()

    for {
        select {
        case <-ctx.Done():
            fmt.Println("Worker cancelled:", ctx.Err())
            return
        default:
            fmt.Println("Working...")
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    var wg sync.WaitGroup

    wg.Add(1)
    go worker(ctx, &wg)

    time.Sleep(2 * time.Second)
    cancel()
    wg.Wait()

    fmt.Println("All workers done")
}
````

---

You can also use other context-based methods:

#### `context.WithTimeout(parent Context, timeout time.Duration)`

This automatically cancels the context after the specified duration.

```go
ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
defer cancel()

go func(ctx context.Context) {
    <-ctx.Done()
    fmt.Println("Timed out:", ctx.Err()) // Prints after 2 seconds
}(ctx)
```

#### `context.WithDeadline(parent Context, deadline time.Time)`

This cancels the context at a specific time. It's similar to `WithTimeout`, but instead of a duration, you provide an exact deadline.

```go
deadline := time.Now().Add(3 * time.Second)
ctx, cancel := context.WithDeadline(context.Background(), deadline)
defer cancel()

go func(ctx context.Context) {
    <-ctx.Done()
    fmt.Println("Deadline reached:", ctx.Err())
}(ctx)
```

---

### Method 2: Using Channels to Signal Termination

This is another clean and idiomatic approach in Go.

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(ch chan bool, wg *sync.WaitGroup) {
    defer wg.Done()

    for {
        select {
        case <-ch:
            fmt.Println("Worker cancelled")
            return
        default:
            fmt.Println("Working...")
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    ch := make(chan bool)
    var wg sync.WaitGroup

    wg.Add(1)
    go worker(ch, &wg)

    time.Sleep(2 * time.Second)
    ch <- true

    wg.Wait()
}
```

---

### Method 3: Using a Shared Variable (Not Recommended)

While possible, this method is generally discouraged unless necessary, as it can be prone to race conditions if not handled properly.

```go
package main

import (
    "fmt"
    "sync"
    "sync/atomic"
    "time"
)

func worker(stop *int32, wg *sync.WaitGroup) {
    defer wg.Done()

    for {
        if atomic.LoadInt32(stop) == 1 {
            fmt.Println("Worker cancelled.")
            return
        }
        fmt.Println("Working...")
        time.Sleep(500 * time.Millisecond)
    }
}

func main() {
    var stop int32
    var wg sync.WaitGroup

    wg.Add(1)
    go worker(&stop, &wg)

    time.Sleep(2 * time.Second)
    atomic.StoreInt32(&stop, 1)

    wg.Wait()
    fmt.Println("All workers done")
}
```

---

### Conclusion

Graceful termination of goroutines is a fundamental part of writing robust concurrent code in Go. Use:

* `context` for structured and scalable cancellation
* `channels` for simple signaling
* shared flags with caution and proper synchronization

Each method has its own use case, but **context-based cancellation is the most idiomatic and scalable** approach in modern Go applications.

