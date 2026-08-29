---

slug: semaphores-for-concurrency-control-in-golang
title: "Semaphores for Concurrency Control in Golang — A Practical Example"
description: "Understand semaphores through a practical Go example, build one using buffered channels, and see when to use x/sync/semaphore."
tags: [golang, concurrency, semaphore]
date: 2026-08-14
authors: shekhar-patil
----------------------

When working with goroutines, it's very easy to create more concurrency than you actually want.

For example, imagine you need to process 1,000 files. You could simply create 1,000 goroutines:

```go
for i := 0; i < 1000; i++ {
    go processFile(i)
}
```

Creating goroutines is cheap, but the resources they use may not be.

Maybe your database can handle only 10 queries at a time. Maybe an external API allows only a certain amount of concurrent traffic. Or perhaps each task consumes a significant amount of CPU or memory.

In these situations, we don't necessarily want to reduce the number of goroutines. We want to **control how many of them are doing the actual work at the same time**.

That's where a semaphore becomes useful.

In this article, we'll first build a simple semaphore from scratch using a buffered channel and then implement the same example using `golang.org/x/sync/semaphore`.

<!--truncate-->

---

## What is a Semaphore?

A semaphore is a concurrency-control mechanism that limits how many goroutines can access a resource or perform an operation at the same time.

Think of a semaphore with a capacity of `3` as having **3 permits**:

```text
Semaphore capacity = 3

┌─────────┐
│ Permit 1│
├─────────┤
│ Permit 2│
├─────────┤
│ Permit 3│
└─────────┘
```

A goroutine must **acquire a permit** before doing the work.

When the work is complete, it **releases the permit**.

So if 10 goroutines are trying to perform work and the semaphore has only 3 permits:

```text
Task 1 ──→ Acquire ──→ Running
Task 2 ──→ Acquire ──→ Running
Task 3 ──→ Acquire ──→ Running

Task 4 ──→ Waiting
Task 5 ──→ Waiting
Task 6 ──→ Waiting
...
Task 10 ─→ Waiting
```

Only 3 tasks can run the protected work at the same time.

Once one of the running tasks finishes and releases its permit, another waiting task can continue.

The basic pattern is:

```text
Acquire → Do the work → Release
```

This simple pattern is useful whenever you want to put a limit on concurrent access to something.

---

## 1. Building a Semaphore with a Buffered Channel

Go's buffered channels make it surprisingly simple to implement a semaphore.

We start with:

```go
ch := make(chan struct{}, 3)
```

The channel capacity becomes our concurrency limit.

Let's wrap it in a small `Semaphore` type:

```go
type Semaphore struct {
    ch chan struct{}
}

func NewSemaphore(maxConcurrency int) *Semaphore {
    return &Semaphore{
        ch: make(chan struct{}, maxConcurrency),
    }
}

func (s *Semaphore) Acquire() {
    s.ch <- struct{}{}
}

func (s *Semaphore) Release() {
    <-s.ch
}
```

Now let's use it with 10 tasks and allow only 3 to run concurrently:

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

type Semaphore struct {
    ch chan struct{}
}

func NewSemaphore(maxConcurrency int) *Semaphore {
    return &Semaphore{
        ch: make(chan struct{}, maxConcurrency),
    }
}

func (s *Semaphore) Acquire() {
    s.ch <- struct{}{}
}

func (s *Semaphore) Release() {
    <-s.ch
}

func main() {
    sem := NewSemaphore(3)

    var wg sync.WaitGroup

    active := 0
    var mu sync.Mutex

    for i := 0; i < 10; i++ {
        wg.Add(1)

        go func(id int) {
            defer wg.Done()

            sem.Acquire()
            defer sem.Release()

            mu.Lock()
            active++
            fmt.Printf("Task %d started   | Active: %d\n", id, active)
            mu.Unlock()

            // Simulate work
            time.Sleep(2 * time.Second)

            mu.Lock()
            active--
            fmt.Printf("Task %d completed | Active: %d\n", id, active)
            mu.Unlock()
        }(i)
    }

    wg.Wait()
}
```

The important part is:

```go
sem.Acquire()
defer sem.Release()
```

Everything between these two lines is limited by the semaphore.

### How does the channel actually limit concurrency?

We created:

```go
make(chan struct{}, 3)
```

which gives us a buffered channel with a capacity of 3.

When a goroutine calls:

```go
s.ch <- struct{}{}
```

it puts a value into the channel.

The first three goroutines can do this immediately:

```text
Task 1 → channel ✓
Task 2 → channel ✓
Task 3 → channel ✓

Channel is now full.
```

When the fourth goroutine tries:

```go
s.ch <- struct{}{}
```

the channel is full, so the goroutine blocks.

It stays blocked until another goroutine releases its permit:

```go
<-s.ch
```

That removes one value from the channel, creating space for another goroutine.

So the channel is effectively acting as our pool of permits.

```text
Acquire
   ↓
Put value into channel
   ↓
Channel full? → Wait
   ↓
Do the work
   ↓
Release
   ↓
Remove value from channel
   ↓
Next waiting goroutine can proceed
```

---

## What does the output tell us?

You might see something like:

```text
Task 0 started   | Active: 1
Task 2 started   | Active: 2
Task 1 started   | Active: 3

Task 2 completed | Active: 2
Task 9 started   | Active: 3

Task 0 completed | Active: 2
Task 6 started   | Active: 3
```

The exact order will change because goroutine scheduling is not deterministic.

But one thing will always be true:

```text
Active <= 3
```

We created 10 goroutines, but only 3 can execute the protected work at the same time.

That's the actual value of a semaphore.

---

# 2. Using `golang.org/x/sync/semaphore`

The channel implementation is great when you need a simple concurrency limit.

But Go also has a commonly used semaphore implementation in the `golang.org/x/sync` module.

It provides a `Weighted` semaphore:

```go
import "golang.org/x/sync/semaphore"
```

The same example becomes:

```go
package main

import (
    "context"
    "fmt"
    "sync"
    "time"

    "golang.org/x/sync/semaphore"
)

func main() {
    sem := semaphore.NewWeighted(3)
    ctx := context.Background()

    var wg sync.WaitGroup

    active := 0
    var mu sync.Mutex

    for i := 0; i < 10; i++ {
        wg.Add(1)

        go func(id int) {
            defer wg.Done()

            if err := sem.Acquire(ctx, 1); err != nil {
                return
            }
            defer sem.Release(1)

            mu.Lock()
            active++
            fmt.Printf("Task %d started   | Active: %d\n", id, active)
            mu.Unlock()

            // Simulate work
            time.Sleep(2 * time.Second)

            mu.Lock()
            active--
            fmt.Printf("Task %d completed | Active: %d\n", id, active)
            mu.Unlock()
        }(i)
    }

    wg.Wait()
}
```

The idea hasn't changed:

```go
sem.Acquire(ctx, 1)
defer sem.Release(1)
```

The `1` means this task needs one permit.

Since the semaphore was created with:

```go
semaphore.NewWeighted(3)
```

only three permits can be acquired at once.

---

## Why does `Acquire` take a Context?

This is one of the useful differences between the simple channel implementation and the library implementation.

Imagine all three permits are currently being used:

```text
Task 1 → Running
Task 2 → Running
Task 3 → Running

Task 4 → Waiting
```

Normally, Task 4 will keep waiting until a permit becomes available.

But what if Task 4 belongs to an HTTP request that has already timed out?

We don't want the goroutine to wait forever for a resource that the caller no longer needs.

That's where `context.Context` helps.

For example:

```go
ctx, cancel := context.WithTimeout(
    context.Background(),
    2*time.Second,
)
defer cancel()

if err := sem.Acquire(ctx, 1); err != nil {
    return err
}
```

Now the goroutine will wait for at most 2 seconds to acquire a permit.

If no permit becomes available:

```text
Task 4
   ↓
Acquire()
   ↓
Waiting...
   ↓
2 seconds
   ↓
Context cancelled
   ↓
Acquire() returns error
```

An important detail:

**Context cancellation does not release a semaphore permit that has already been acquired.**

It only allows a goroutine waiting inside `Acquire()` to stop waiting.

For an HTTP server, you would typically use the request's context:

```go
func handler(w http.ResponseWriter, r *http.Request) {
    if err := sem.Acquire(r.Context(), 1); err != nil {
        return
    }
    defer sem.Release(1)

    // Do the work
}
```

Now if the request is cancelled while waiting for the semaphore, `Acquire` can return instead of keeping the goroutine blocked.

---

## Which One Should You Use?

For a simple concurrency limit, a buffered channel is often enough:

```go
sem := make(chan struct{}, 10)
```

It's simple, idiomatic, and doesn't require another dependency.

If you need features such as:

* Context-aware acquisition
* Weighted permits
* More advanced semaphore behavior

then `golang.org/x/sync/semaphore` is a better choice.

The important idea is not the implementation itself.

It's understanding the pattern:

```text
Acquire
   ↓
Do the work
   ↓
Release
```

Once you understand that, you'll start seeing practical places to use semaphores everywhere—limiting database queries, controlling external API calls, processing files, managing expensive background jobs, or protecting any resource where **unlimited concurrency can become a problem**.

A semaphore doesn't stop you from creating goroutines.

**It simply puts a limit on how many of them can proceed at the same time.**
