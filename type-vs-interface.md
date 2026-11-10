# Type vs Interface in TypeScript: What Are the Differences?

## Introduction

TypeScript provides two powerful ways to define data structures: `type` aliases and `interface`. Both help developers describe the shape of objects and improve type safety. Although they look similar, they have some important differences.

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

One important feature of interfaces is declaration merging. If multiple interfaces have the same name, TypeScript automatically combines their properties.

### 2. Type Alias

A `type` alias allows developers to create custom names for different types, including objects, unions, intersections, primitives, and tuples.

```typescript
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

Unlike interfaces, type aliases cannot be reopened or merged through duplicate declarations.

### 3. Core Differences

Interfaces support declaration merging and are commonly used for object-oriented structures and class contracts. Type aliases are more flexible because they support unions, intersections, tuples, and primitive types.

## When Should You Choose One?

Choose `interface` when defining object shapes, public APIs, or structures that may need extension through declaration merging. Choose `type` when working with unions, tuples, intersections, or complex type combinations.

## Conclusion

Both `type` and `interface` are valuable TypeScript features. Neither is universally better. Understanding their differences helps developers write cleaner, more maintainable, and type-safe code.