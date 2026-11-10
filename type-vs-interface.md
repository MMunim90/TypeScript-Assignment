# Type vs Interface in TypeScript: What Are the Differences?

## Introduction

TypeScript provides two powerful ways to define data structures: `type` aliases and `interface`. These help developers to create the shape of objects and improve type safety. They look similar, but they have some important differences.

## Detailed Discussion

### 1. Interface

An `interface` is primarily used to define the structure of objects. It describes which properties and methods an object should contain.

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rakib",
  age: 22
};
```

One important feature of interfaces is declaration merging. If multiple interfaces have the same name, TypeScript automatically combines their properties and create a single interface.

### 2. Type Alias

A `type` alias allows developers to create custom names for different types, including objects, unions, intersections, primitives, and tuples.

```typescript
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

Type aliases cannot be merged through duplicate declarations like interface. If duplicate declaration happens, if throw an error.

### 3. Core Differences

Interfaces support declaration merging and are commonly used for object-oriented structures and class contracts. Type aliases are more flexible because they support unions, intersections, tuples, and primitive types.

## Conclusion

Both `type` and `interface` are valuable TypeScript features. Understanding their differences helps developers write cleaner, more maintainable, and type-safe code.