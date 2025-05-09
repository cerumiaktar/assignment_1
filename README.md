=========What are some differences between interfaces and types in TypeScript?=========
Interface and type are both used to define the structure of objects in typescripts,but they have differences in flexibility and usage.Type is more versatile, allowing unions, intersections, and more complex type definitions.On otherhand interface is extendable and primarily for object shapes.

Type in TypeScript
A type is a  collection of data types that used to define a custom name for any type, including:object shapes,primitives (like string, number),unions (string | number),tuples ([number, string]),intersections (type A & type B).It helps make code more flexible,readable, reusable, and organized.Type has fewer capabilities and does not support multiple merged declarations.

Example:
type User = {
  name: string;
  age: number;
};

Interface in TypeScript
In TypeScript, an interface is a way to define the structure or shape of an object. It specifies what properties and types an object should have.Interfaces are mainly used for-Enforcing contracts in classes,Describing object structures,Making code more readable and maintainable.Interface has more capabilities and supports multiple merged declarations.

Example:
interface User {
  name: string;
  age: number;
}


=========How does TypeScript help in improving code quality and project maintainability?=========

TypeScript is a programming language developed by Microsoft. It is a superset of JavaScript, which means it includes all JavaScript features plus extra tools that help developers write better, safer code.

Key Features:
-Static Typing
  You can define variable types (e.g., string, number, boolean).
  Helps catch errors before running the code.
-Compile-Time Error Checking
-Interfaces & Type Aliases
-Modern JavaScript Features
-Tooling & Editor Support

Why Use TypeScript?
TypeScript is becoming the go-to choice for modern web and software development. Here are the main reasons why developers prefer it over plain JavaScript-
-Catch Errors Early
-Better Developer Experience
-Improved Code Quality
-Easier Team Collaboration
-Safe Refactoring
-Scales Well with Large Projects
-Works with JavaScript

Conclusion
TypeScript is a powerful tool that can help you write cleaner, more reliable, and maintainable code.TypeScript significantly improves code quality and maintainability by introducing type safety, enhancing IDE support, improving readability, enabling safe refactoring, promoting modular code organization, and allowing for gradual adoption.As web applications become more complex, TypeScript offers the robustness needed to manage large codebases effectively.
