---
slug: distroless-migration
title: "Migrating to Distroless Containers — My Real World Journey"
description: "A practical guide on what distroless containers are, their pros and cons, and real challenges I faced while migrating microservices to distroless."
tags: [docker, containers, distroless, devops, golang, kubernetes]
date: 2025-11-05
authors: shekhar-patil
---

# Migrating to Distroless Containers — My Real-World Journey

Recently, I’ve been working on migrating multiple services to **distroless containers**, and it’s been quite an interesting learning curve. When I first heard about “distroless,” I assumed it was just another buzzword in the container world — until I actually started using it in production.

<!--truncate-->

In this post, I’ll share what distroless containers are, their advantages and disadvantages, the challenges I faced during migration, and a few lessons learned along the way.

---

## What Are Distroless Containers?

A **distroless container** is a Docker image that does not include a full Linux distribution like Ubuntu, Debian, or Alpine. Instead, it only contains:

- Your application binary
- The runtime dependencies required to execute that binary

That’s it. No shell (`bash`), no package manager (`apt`, `yum`), and no unnecessary tools.

Google popularized the concept through their [Distroless project](https://github.com/GoogleContainerTools/distroless), aiming to make containers smaller, more secure, and production-focused.

---

## Why Go Distroless?

When I started exploring distroless images, my main motivation was **security and performance**. But once I began migrating, I discovered several other benefits.

### 1. Reduced Attack Surface

Since there’s no shell or package manager, attackers have very limited options to exploit. They can’t simply exec into the container and run commands.
Essentially, there’s nothing to attack beyond your application itself.

### 2. Smaller Image Size

Distroless images remove unnecessary OS layers, reducing the image size significantly.
Smaller images mean faster deployments and less network overhead.

### 3. Faster Startup and Pull Times

Because they’re lightweight, distroless containers pull and start up faster — a big advantage in Kubernetes environments where pods are frequently restarted or scaled.

### 4. Simplified Dependency Management

You only include what your application truly needs — no extra tools, libraries, or system packages.

---

## What’s Missing (The Disadvantages)

Distroless containers bring simplicity, but that simplicity also creates new challenges.

### 1. No Shell Access

You can’t just `docker exec -it <container> /bin/bash` anymore.
For teams used to debugging directly inside containers, this can be frustrating at first.

**Tip:** I learned to use *debug sidecars* or temporarily replace the base image with a non-distroless version for troubleshooting.

### 2. Harder Debugging and Troubleshooting

There’s no `curl`, `netcat`, `ps`, or `top`. You need to plan observability from the start.
Tools like Prometheus exporters, structured logging, and health probes become essential.

### 3. Additional Build Complexity

Since distroless images only contain your final binary, you must use **multi-stage Docker builds** — one stage for compiling, and another for running the minimal image.

---

## My Migration Experience — Challenges and Learnings

When we began migrating our existing services to distroless containers, I encountered several practical issues that weren’t immediately obvious.

### 1. Replacing Shell Scripts

Our older containers relied heavily on shell scripts for:

- Setting environment variables
- Running database migrations
- Checking dependencies before startup

With no shell available, I had to rethink this completely.

**Solution:** I rewrote many of these scripts in **Go**.
This made the logic type-safe, testable, and independent of any shell interpreter.

Example:

```bash
# Old startup.sh
#!/bin/bash
echo "Waiting for database..."
until nc -z $DB_HOST 5432; do
  sleep 1
done
echo "Database is up!"
./app
````

Converted to Go:

```go
package main

import (
    "fmt"
    "net"
    "os"
    "time"
)

func waitForDB(host string, port string) {
    for {
        conn, err := net.DialTimeout("tcp", net.JoinHostPort(host, port), 2*time.Second)
        if err == nil {
            conn.Close()
            fmt.Println("Database is up!")
            return
        }
        fmt.Println("Waiting for database...")
        time.Sleep(1 * time.Second)
    }
}

func main() {
    waitForDB(os.Getenv("DB_HOST"), "5432")
    // Start app here
}
```

This approach made each container self-contained and completely distroless-friendly.

---

### 2. Using Init Containers for Legacy Tasks

Some older scripts were too complex to rewrite immediately.
In those cases, I used **Kubernetes init containers** (based on lightweight images like Alpine or Debian) to handle:

* Database migrations
* Configuration setup
* Any one-time startup logic

After the init containers completed, the main service ran in the distroless container.
This hybrid approach made the transition much smoother.

---

### 3. Debugging Without a Shell

Debugging was one of the biggest challenges initially.
My usual “`docker exec` into the pod” workflow no longer worked.

What helped:

* Running **debug tools** in separate ephemeral containers (`kubectl debug`)
* Writing **structured logs** with clear log levels
* Adding proper **readiness and liveness probes**

Over time, I began relying more on observability and logs instead of manual inspection.

---

### 4. Multi-Stage Docker Builds

Here’s an example of a typical multi-stage Dockerfile after migration:

```dockerfile
# Stage 1: Build the binary
FROM golang:1.23 AS builder
WORKDIR /app
COPY . .
RUN go build -o main .

# Stage 2: Run using a distroless base
FROM gcr.io/distroless/base-debian12
WORKDIR /
COPY --from=builder /app/main /
USER nonroot:nonroot
ENTRYPOINT ["/main"]
```

This pattern ensures the final image is small, secure, and free of unnecessary build tools.

---

## Other Lessons Learned

* **Pin image digests** instead of tags — distroless images are updated frequently.
* **Use non-root users** — distroless makes this straightforward with `nonroot:nonroot`.
* **Keep base images consistent** across services to simplify maintenance.
* **Document startup logic** — once shell scripts are gone, other developers might need clarity.

---

## Final Thoughts

Migrating to distroless containers isn’t just a technical change — it’s a **shift in mindset**.
You move from treating containers as mini operating systems to treating them as **immutable binaries**.

The transition can be challenging, especially if your workflows depend heavily on shell utilities, but the **security, performance, and consistency gains** make it worth the effort.

If you’re planning a migration:

* Start small.
* Keep a debug-friendly fallback.
* Refactor gradually.

In the end, your containers will be lighter, faster, and truly production-ready.

