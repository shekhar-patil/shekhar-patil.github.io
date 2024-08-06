---
sidebar_position: 1
---

# Hello, World!

## Writing the "Hello, World!" Program

1. **Create a New Directory:**
   Create a new directory for your Go project. This can be done using the terminal or your file explorer.

   ```sh
   mkdir hello-world
   cd hello-world
   ```

2. **Create a New File:**
   Inside the `hello-world` directory, create a new file named `main.go`.

   ```sh
   touch main.go
   ```

3. **Write the Code:**
   Open `main.go` in your favorite text editor and add the following code:

   ```go
   package main

   import "fmt"

   func main() {
       fmt.Println("Hello, World!")
   }
   ```

### Explanation of the Code

- `package main`: This line declares that the file belongs to the `main` package. Every Go application must have a `main` package.
- `import "fmt"`: This line imports the `fmt` package, which contains functions for formatted I/O, including printing to the console.
- `func main() { ... }`: This line defines the `main` function, which is the entry point of a Go program. When the program is run, the code inside the `main` function is executed.
- `fmt.Println("Hello, World!")`: This line calls the `Println` function from the `fmt` package to print the string "Hello, World!" to the console.

## Step 3: Running the Program

To run your "Hello, World!" program, open a terminal, navigate to the directory containing `main.go`, and execute the following command:

```sh
go run main.go
```

You should see the following output:

```
Hello, World!
```

Congratulations! You've successfully written and run your first Go program.

## Next Steps

Now that you've got a basic understanding of Go, you can explore more features and concepts:

- **Variables and Data Types:** Learn how to declare and use variables in Go.
- **Control Structures:** Understand how to use loops and conditional statements.
- **Functions:** Discover how to define and call functions in Go.
- **Packages and Modules:** Learn about organizing code and managing dependencies.

Happy coding!
