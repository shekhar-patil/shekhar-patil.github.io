---
sidebar_position: 2
---

# Variables

## Data types

In Go, types are mainly divided into the following four categories:

1. **Basic Types**: Numbers, strings, and booleans come under this category.
2. **Aggregate Types**: Arrays and structs come under this category.
3. **Reference Types**: Pointers, slices, maps, functions, and channels come under this category.
4. **Interface Types**: This category includes interfaces, which define a set of method signatures and are implemented by types that provide those methods.

### 1. **Basic Types**

Basic types are the most fundamental data types in Go. They represent simple values such as numbers, strings, and booleans.

- **Numbers**: Go supports various numeric types, including integers, floating-point numbers, and complex numbers.
  - **Integers**: `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`
  - **Floating-point numbers**: `float32`, `float64`
  - **Complex numbers**: `complex64`, `complex128`

  Example:
  ```go
  var age int = 30
  var temperature float64 = 36.6
  ```

- **Strings**: A sequence of characters represented by the `string` type.
  
  Example:
  ```go
  var name string = "Shekhar"
  ```

- **Booleans**: A type that can hold one of two values: `true` or `false`.
  
  Example:
  ```go
  var isActive bool = true
  ```

### 2. **Aggregate Types**

Aggregate types are types that can hold multiple values. They include arrays and structs.

- **Array**: An array is a fixed-size sequence of elements of a single type. The size of the array is part of its type.

  Example:
  ```go
  var numbers [5]int = [5]int{1, 2, 3, 4, 5}
  ```

- **Struct**: A struct is a composite type that groups together variables under a single name. Each variable within a struct is called a field.

  Example:
  ```go
  type Person struct {
      Name string
      Age  int
  }

  var person Person = Person{Name: "Shekhar", Age: 30}
  ```

### 3. **Reference Types**

Reference types hold references to memory locations where the actual data is stored. They include pointers, slices, maps, functions, and channels.

- **Pointers**: A pointer is a variable that stores the memory address of another variable. They are declared using the `*` operator.

  Example:
  ```go
  var x int = 10
  var p *int = &x  // p is a pointer to x
  ```

- **Slices**: A slice is a dynamically-sized, flexible view into the elements of an array. Unlike arrays, slices can grow and shrink.

  Example:
  ```go
  var nums []int = []int{1, 2, 3, 4, 5}
  ```

- **Maps**: A map is a collection of key-value pairs, where each key is unique within the map.

  Example:
  ```go
  var m map[string]int = map[string]int{"one": 1, "two": 2}
  ```

- **Functions**: Functions are first-class citizens in Go, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

  Example:
  ```go
  var f func(int) int = func(x int) int { return x * x }
  ```

- **Channels**: Channels are used for communication between goroutines, enabling safe concurrency. They allow you to send and receive values between different goroutines.

  Example:
  ```go
  var ch chan int = make(chan int)
  ```

### 4. **Interface Types**

Interfaces define a set of method signatures but do not provide implementations. Types that implement these methods satisfy the interface and can be used wherever the interface is expected.

- **Interface**: An interface type specifies a set of method signatures. A type implements an interface by implementing the methods. Interfaces are a key feature in Go's type system and support polymorphism.

  Example:
  ```go
  type Describer interface {
      Describe() string
  }

  type Person struct {
      Name string
      Age  int
  }

  func (p Person) Describe() string {
      return fmt.Sprintf("Name: %s, Age: %d", p.Name, p.Age)
  }

  var d Describer = Person{Name: "Shekhar", Age: 18}
  fmt.Println(d.Describe())  // Outputs: Name: Shekhar, Age: 18
  ```

In this example, the `Person` type implements the `Describer` interface because it has a method `Describe` with the same signature as specified in the interface. This allows instances of `Person` to be used wherever a `Describer` is expected.

**Note:** We will go deeper into interfaces in coming tutorials.


## Default Values

In Go, when a variable is declared but not initialized, it is assigned a default value, known as the "zero value." The zero value is type-specific and represents the default initialization for that type. Here's a list of default values for the various data types in Go:

### **Basic Types**
- **Integer Types (e.g., `int`, `int8`, `uint32`, etc.)**
  - Default value: `0`
  
  Example:
  ```go
  var x int  // x is 0
  ```

- **Floating-Point Types (`float32`, `float64`)**
  - Default value: `0.0`
  
  Example:
  ```go
  var pi float64  // pi is 0.0
  ```

- **Complex Types (`complex64`, `complex128`)**
  - Default value: `0 + 0i`
  
  Example:
  ```go
  var c complex128  // c is 0 + 0i
  ```

- **Boolean (`bool`)**
  - Default value: `false`
  
  Example:
  ```go
  var isActive bool  // isActive is false
  ```

- **String (`string`)**
  - Default value: `""` (empty string)
  
  Example:
  ```go
  var name string  // name is ""
  ```

### **Aggregate Types**
- **Array**
  - Default value: Each element of the array is initialized to the zero value of the array's element type.
  
  Example:
  ```go
  var arr [3]int  // arr is [0, 0, 0]
  ```

- **Struct**
  - Default value: Each field in the struct is initialized to the zero value of its respective type.
  
  Example:
  ```go
  type Person struct {
      Name string
      Age  int
  }
  var p Person  // p is Person{Name: "", Age: 0}
  ```

### **Reference Types**
- **Pointer (`*T`)**
  - Default value: `nil`
  
  Example:
  ```go
  var p *int  // p is nil
  ```

- **Slice (`[]T`)**
  - Default value: `nil`
  
  Example:
  ```go
  var s []int  // s is nil
  ```

- **Map (`map[K]V`)**
  - Default value: `nil`
  
  Example:
  ```go
  var m map[string]int  // m is nil
  ```

- **Channel (`chan T`)**
  - Default value: `nil`
  
  Example:
  ```go
  var ch chan int  // ch is nil
  ```

- **Function (`func`)**
  - Default value: `nil`
  
  Example:
  ```go
  var f func(int) int  // f is nil
  ```

### **Interface Types**
- **Interface (`interface{}`)**
  - Default value: `nil`
  
  Example:
  ```go
  var i interface{}  // i is nil
  ```

These zero values ensure that variables have a well-defined value when they are declared but not explicitly initialized.

We will cover many topics in coming tutorials. 

Happy coding!