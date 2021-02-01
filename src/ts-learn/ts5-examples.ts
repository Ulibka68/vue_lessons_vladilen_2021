type Readonly2<T> = {
  readonly [P in keyof T]: T[P];
};

// keyof is called  , and it represents a union of allowed property names (the keys) index type query
// of the given type.

// the fragment   means "give me the union of all the properties of [P in keyof T]
// the given type   ." This seems as if we’re accessing the elements of some object, but actually, this T
// is done for declaring types. The     keyof       type query can be used only in type declarations. keyof

interface Person {
  name: string;
  age: number;
}

const persons: Person[] = [
  { name: "John", age: 32 },
  { name: "Mary", age: 33 }
];

function filterBy<T, P extends keyof T>(property: P, value: T[P], array: T[]) {
  return array.filter(item => item[property] === value);
}

console.log(filterBy("name", "John", persons));
// console.log(filterBy("lastName", "John", persons)); // error TS2345: Argument of type '"lastName"' is not assignable to parameter of type '"name" | "age"'.
// console.log(filterBy("age", "twenty", persons)); // error TS2345: Argument of type '"twenty"' is not assignable to parameter of type 'number'.

//=============================

type ReturnPromise<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T;

type Promisify<T> = {
  [P in keyof T]: ReturnPromise<T[P]>;
};

interface SyncService {
  baseUrl: string;
  getA(): string;
}

class AsyncService implements Promisify<SyncService> {
  constructor(public baseUrl: string) {}

  getA(): Promise<string> {
    return Promise.resolve("");
  }
}

const service = new AsyncService("http://s");

const result = service.getA(); // hover over result: it's of type Promise<string>

// https://www.typescriptlang.org/play?#code/C4TwDgpgBAShwFcBOA7ACkg9gWwJYGcIAeAFQD4oBeAWACgoGoSoIAPYCFAE3ygAoAdEICGSAOb4AXFFwoAZhCRQAggEoqFWQqUwoAfn5CBoidLUaoGHAWIwK0kgG5GdOqEiWsefLjkhSFJRQAN50jFAA2mgyKFAA1hAgmHJMALrScIioVt7EJFGpZI50AL7FtHSyHEhywgDG0ADKICh1jYoAbrgNIWGMAEbChACqSAA20vjASLJizn0MYvDKfKqT07PlJa60dWNDvMr4LW2d3dC42GBjENicwLw5BL7+za3tSF0NFKH0A0MQUYTKBTGYoOZQHbhJbAFZrTzWQhEUGzH4LcJQJDwZCxJ6EARY-CYMYdCB8ADk5NU5XC21odLoN2AILOPSCKAgAHcVMd3qyydSdoz4JiIPgEGNmUFCJ9zgIYXDnAB6JVQAAWmFJSk1ilF4sl0lwwHJvGSUHc0DxxBR4LIdCAA

// import { City, Person, Product, Employee } from "./dataTypes";
/*
type CustomMapped<T, K extends keyof T> = {
  readonly [P in K]?: T[P];
};
type BuiltInMapped<T, K extends keyof T> = Readonly<Partial<Pick<T, K>>>;
const p1: CustomMapped<Product, "name"> = { name: "Kayak" };
const p2: BuiltInMapped<Product, "name" | "price"> = {
  name: "Lifejacket",
  price: 48.95
};
console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`);


 */

// ==
type CustomMapped<K extends keyof any, T> = {
  [P in K]: T;
};
const p1: CustomMapped<"name" | "city", string> = {
  name: "Bob",
  city: "London"
};
const p2: Record<"name" | "city", string> = { name: "Alice", city: "Paris" };
console.log(`Custom mapped type: ${p1.name}, ${p1.city}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.city}`);

//==
class Product {
  constructor(public name: string, public price: number) {}
}
type unionOfTypeNames<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
};

// здесь [keyof T] - выбор типа по индексу - получиться тип1|тип2
type propertiesOfType<T, U> = unionOfTypeNames<T, U>[keyof T];
function total<T, P extends propertiesOfType<T, number>>(
  data: T[],
  propName: P
): number {
  return data.reduce((t, item) => (t += Number(item[propName])), 0);
}

// Essential TypeScript
// From Beginner to Pro
// Authors: Freeman, Adam

/*
the mapping unionOfTypeNames<Product, number>
produces the following mapped type:
  ...
{
    name: never,
    price: "price"
}

For the mapped type created by unionOfTypeNames<Product, number>, the indexed access operator
produces the following union:
...
never | "price"

 never is automatically removed from unions
*/

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Total: ${total(products, "price")}`);

//***********
type targetKeys<T> = T extends (infer U)[] ? keyof U : keyof T;
function getValue<T, P extends targetKeys<T>>(data: T, propName: P): T[P] {
  if (Array.isArray(data)) {
    return data[0][propName];
  } else {
    return data[propName];
  }
}
products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);

//**************
type Result<T> = T extends (...args: any) => infer R ? R : never;

function processArray<T, Func extends (arg: T) => any>(
  data: T[],
  func: Func
): Result<Func>[] {
  return data.map(item => func(item));
}
const selectName = (p: Product) => p.name;
products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
const names: string[] = processArray(products, selectName);
names.forEach(name => console.log(`Name: ${name}`));

//*
interface Point {
  x: number;
  y: number;
}
type ReadonlyPoint = {
  readonly [P in "x" | "y"]: Point[P];
};
type Pick22<T, K extends keyof T> = {
  [P in K]: T[P];
};
