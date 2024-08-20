---
sidebar_position: 1
---

# Worker Pools

### What is worker pool pattern?

The Worker Pool pattern is a concurrency pattern in Go that allows you to manage and control the number of goroutines working on a set of tasks. This pattern is particularly useful when you have a large number of tasks to process and want to limit the number of concurrent goroutines to prevent excessive resource usage.

![Worker pool pattern](img/worker-pool-pattern.jpg)

### The basic flow of the worker pool pattern looks like this:

```go
package main

func main() {
    numJobs := 10
    numWorkers := 3


    // Create job and result channels
    
    // Start the worker pool

    // Submit jobs to workers

    // Collect results

    // Wait for all goroutines to finish
}
```

### Here is the final code implementing the Worker Pool pattern:

Collects results in a separate goroutine. 

```go 
package main

import (
    "fmt"
    "sync"
)

type Job struct {
    Id    int
    Value int
}

type Result struct {
    JobId int
    Value int
}

type WorkerPool struct {
    numJobs    int
    numWorkers int
    jobs       chan Job
    results    chan Result
    wg         sync.WaitGroup // WaitGroup to track all worker goroutines
}

func (wp *WorkerPool) StartWorker(id int) {
    defer wp.wg.Done()

    for job := range wp.jobs {
        fmt.Printf("Job %d processed by worker %d\n", job.Id, id)
        wp.results <- Result{JobId: job.Id, Value: job.Value * 1}
    }
}

func (wp *WorkerPool) StartWorkers() {
    for i := 0; i < wp.numWorkers; i++ {
        wp.wg.Add(1)
        go wp.StartWorker(i)
    }
}

func (wp *WorkerPool) SubmitJobs() {
    for i := 0; i < wp.numJobs; i++ {
        wp.jobs <- Job{Id: i, Value: i}
    }
    close(wp.jobs)
}

func (wp *WorkerPool) PrintResults(wg *sync.WaitGroup) {
    defer wg.Done()

    for result := range wp.results {
        fmt.Printf("Result: Job %d Value %d\n", result.JobId, result.Value)
    }
}

func main() {
    numJobs := 10
    numWorkers := 3
    var wg sync.WaitGroup // WaitGroup to track the results printer goroutine

    // Initialize the WorkerPool with job and result channels
    wp := WorkerPool{
        numJobs:    numJobs,
        numWorkers: numWorkers,
        jobs:       make(chan Job, numJobs),
        results:    make(chan Result, numJobs),
    }

    // Start workers
    wp.StartWorkers()

    // Submit jobs to the job channel
    go func() {
        wp.SubmitJobs()
    }()

    // Start the results printer goroutine
    wg.Add(1)
    go wp.PrintResults(&wg)

    // Wait for all worker goroutines to complete
    wp.wg.Wait()

    // Close the results channel once all workers are done
    close(wp.results)

    // Wait for the results printer to finish
    wg.Wait()
}


```

We use two separate WaitGroups in this pattern: 

1. **Worker WaitGroup**: Tracks when all worker goroutines have finished their tasks.
2. **Results WaitGroup**: Ensures the results printing goroutine completes its work after all results are processed.

This separation allows us to manage the lifecycle of workers and results printing independently, ensuring that all tasks are processed and printed correctly.