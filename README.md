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
