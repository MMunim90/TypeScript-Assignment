# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers are important features of Object-Oriented Programming (OOP) in TypeScript. They control how class properties and methods can be accessed from different parts of a program. TypeScript provides three main access modifiers: `public`, `private`, and `protected`. It also provides `readonly` to prevent properties from being reassigned after initialization.

## Detailed Discussion

### 1. Public

The `public` modifier allows properties and methods to be accessed from anywhere, including inside and outside the class. It is the default access modifier in TypeScript.

```typescript
class User {
  public name = "Rakib";
}

const user = new User();
console.log(user.name);
```

### 2. Private

The `private` modifier restricts access to the class where the property or method is declared. It cannot be accessed directly outside that class or from subclasses.

```typescript
class BankAccount {
  private balance = 5000;
}
```

### 3. Protected

The `protected` modifier allows access inside the declaring class and its subclasses, but not from external objects.

```typescript
class Person {
  protected age = 22;
}

class Student extends Person {
  showAge() {
    console.log(this.age);
  }
}
```

### 4. Readonly

The `readonly` modifier prevents a property from being reassigned after initialization. It can be assigned during declaration or inside the constructor.

```typescript
class Product {
  readonly id = 101;
}
```

## Conclusion

Access modifiers help developers control data accessibility, improve security, and maintain clean code. Use `public` for accessible members, `private` for internal data, `protected` for inheritance, and `readonly` for values that should not be reassigned.