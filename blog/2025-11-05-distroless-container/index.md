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

A **distroless container** is a Docker image that does not include a full Linux distribution like Ubuntu, Debian, or Alpine.
Instead, it only contains what your application actually needs to run — your **compiled binary** and its **runtime dependencies**.

That’s it:
- No shell (`bash`)
- No package manager (`apt`, `yum`)
- No unnecessary system tools or libraries

Google popularized the concept through their [Distroless project](https://github.com/GoogleContainerTools/distroless), focusing on making containers **smaller, more secure, and production-optimized**.

---

## Why Go Distroless?

When I began exploring distroless images, my main motivation was **security and performance**, but I soon discovered other benefits that made the migration worthwhile.

- **Reduced Attack Surface** — Without shells or package managers, attackers have little to exploit. They can’t simply exec into your container and run arbitrary commands.
- **Smaller Image Size** — Removing unnecessary OS layers makes images significantly lighter, leading to faster builds, pulls, and deployments.
- **Faster Startup and Pull Times** — Smaller images mean quicker startups, which is especially helpful in Kubernetes where pods often restart or scale rapidly.
- **Simplified Dependency Management** — You include only the dependencies your app truly needs, nothing more.

---

## What’s Missing (The Disadvantages)

Distroless containers simplify production deployments but introduce some trade-offs.

### No Shell Access
You can’t just `docker exec -it <container> /bin/bash` anymore.
For teams that rely on in-container debugging, this can feel restrictive.

> **Tip:** Use *debug sidecars* or temporarily swap your base image with a non-distroless version when troubleshooting.

### Harder Debugging and Troubleshooting
No `curl`, `netcat`, `ps`, or `top`. You’ll need to invest in better observability — structured logging, health probes, and metrics become your main debugging tools.

### Additional Build Complexity
Since distroless containers only hold your final binary, you’ll need **multi-stage builds** to compile and package your app separately.

---

## My Migration Experience — Challenges and Learnings

When we began migrating existing services to distroless containers, I ran into several practical challenges that weren’t obvious at first.

### Replacing Shell Scripts

Our older containers depended heavily on shell scripts for:

- Setting environment variables
- Running database migrations
- Checking dependencies before startup

With no shell available, these scripts had to go.

**Solution:** I rewrote many of them in **Go**.
This made the startup logic type-safe, testable, and independent of any external shell.

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

This made each container self-contained and fully distroless-compatible.

---

### Using Init Containers for Legacy Tasks

Some older scripts were too complex to rewrite right away.
For those, I used **Kubernetes init containers** (based on lightweight images like Alpine or Debian) to handle:

* Database migrations
* Configuration setup
* Any one-time initialization logic

After the init container finished, the main service ran inside the **distroless container**.
This hybrid approach helped us migrate gradually without blocking releases.

---

### Debugging Without a Shell

Debugging was initially tough. The usual “`docker exec` into the pod” approach no longer worked.

Here’s what helped:

* Running **debug tools** inside ephemeral containers (`kubectl debug`)
* Adding **structured logs** with proper log levels
* Setting up **readiness and liveness probes** for better observability

Eventually, I relied less on manual debugging and more on telemetry and metrics.

---

### Multi-Stage Docker Builds

Here’s a typical multi-stage Dockerfile I used after migration:

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

This approach kept the final image small, secure, and free from unnecessary build tools.

---

## Other Lessons Learned

* **Pin image digests** instead of tags — distroless images are updated frequently.
* **Run as non-root** — distroless supports `nonroot:nonroot` users out of the box.
* **Use consistent base images** across services to simplify maintenance.
* **Document startup logic** — once shell scripts are removed, clarity becomes vital for future maintainers.

---

## Final Thoughts

Migrating to distroless containers isn’t just a technical refactor — it’s a **mindset shift**.
You stop treating containers as mini operating systems and start treating them as **immutable application packages**.

The transition can feel challenging, especially if your workflows depend on shell utilities, but the benefits in **security**, **performance**, and **consistency** make it absolutely worth it.

If you’re planning to go distroless:

* Start with one or two services.
* Keep a debug-friendly fallback.
* Refactor incrementally.

By the end, your containers will be lighter, faster, and truly production-ready.

