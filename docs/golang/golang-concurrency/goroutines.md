---
sidebar_position: 1
---

# Goroutines

## 🚀 Goroutines: Go's Lightweight Concurrency

A **Goroutine** is a lightweight, independent function execution managed by the Go runtime. Think of it as a function running concurrently with other code. It's Go's solution for simple and efficient concurrent programming.

You create a Goroutine simply by using the `go` keyword before a function call:

### Creating a Goroutine

```go
go func() {
    // perform a concurrent operation
    fmt.Println("This runs in a separate Goroutine!")
}()

// Or, for a regular function call:
func myTask() { /* ... */ }
go myTask()
```

-----

## 💡 Why Goroutines Are Better Than OS Threads

Traditional **Operating System (OS) Threads** are expensive and resource-heavy. Go replaces them with Goroutines to achieve massive concurrency.

| Feature | **Goroutine** (Go Runtime Managed) | **OS Thread** (Kernel Managed) |
| :--- | :--- | :--- |
| **Initial Stack Size** | \~2 KB (tiny) | \~1–8 MB (large) |
| **Stack Growth** | Grows and shrinks **automatically** | Fixed size |
| **Creation Cost** | Very **cheap** and fast | **Expensive** and slow |
| **Scheduling** | **User-space** (managed by Go runtime) | Kernel-space |
| **Count** | Can run **millions** easily | Limited to thousands |

Because of their minimal overhead, Go can efficiently run hundreds of thousands of Goroutines, a feat impossible with OS threads.

-----

## ⚙️ How Goroutines Work: The G-M-P Scheduler Model

The Go runtime uses a sophisticated scheduler based on the **G-M-P model** to manage and execute Goroutines. This model maps many Goroutines onto a smaller number of OS threads.

### The Components

1.  **G — Goroutine:**

      * Represents an individual Goroutine.
      * It is a struct containing essential information like the **stack**, **instruction pointer** (where to resume execution), and **status** (e.g., runnable, waiting).

2.  **M — Machine (OS Thread):**

      * Represents an actual **OS thread** created by the kernel.
      * The `M` executes the Go code.

3.  **P — Processor (Logical CPU Resource):**

      * A **scheduler token** or context that allows an `M` to execute Go code.
      * A `P` ensures that only one `M` executes Go code at any given time.

### The Execution Flow

  * A **Goroutine (G)** is scheduled to run.
  * It runs on an **Machine (M)**, which is an OS thread.
  * The `M` must hold a **Processor (P)** to execute the Go code associated with the `G`.

The number of available **P**s is controlled by the environment variable **`GOMAXPROCS`**. This setting determines how many Goroutines can truly run **simultaneously** (in parallel). If there are more ready Goroutines than available **P**s, the excess Goroutines wait in local or global run queues.

-----

## Communication and Synchronization

Goroutines communicate with each other primarily using [**channels**](./channels.md). Channels provide a simple, safe way to pass data between concurrently executing functions, following Go's philosophy: **"Do not communicate by sharing memory; instead, share memory by communicating."**

-----
