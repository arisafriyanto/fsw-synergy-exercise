// const myString = "Hello world from TypeScript";
// console.log(myString);

//! Variable: Primitif Data Type

// string data type
const myString: string = "Hello World";

// number data type
const myNumber: number = 100;

// boolean data type
const myBoolean: boolean = true;

// any bisa di assign dengan tipe data yang berbeda
let anyNumber: any = 5;
anyNumber = "5";
anyNumber = "Hello 5";
anyNumber = true;

// union : digunakan untuk varible yang kemungkinan memiliki 2 type data
let myUnion: number | string = 5;
myUnion = "Hello World";

//! Variable: Array

// array : hanya bisa berisi angka
const myArrayNumber: number[] = [3, 4, 5, 6, 3, 4, 6];

// array : hanya bisa berisi string
const myFruits: string[] = ["apple", "banana", "cherry"];

// array : bisa diisidengan type data apa aja
const myAnyArray: any[] = ["apple", 5, true];

// tuple array : untuk menambahkan spesifik type masing-masing item
const myTuple: [number, string] = [100, "hello"];
// tuple ini akan error karena harus sesuai order
// const myTuple2: [number, string] = ["hello", 100]

// array 2 dimensi
const my2DArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//! Variable: Object

// simple object
const product: { name: string; price: number } = {
  name: "Thinkpad T470s",
  price: 100,
};

// object dengan type
type Product = {
  name: string;
  price: number;
};

const myProduct: Product = {
  name: "Google pixel",
  price: 200,
};

// object dengan interface
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Aris",
  age: 21,
};

//! Function

// function dengan 2 parameter number dan return value number
function add(a: number, b: number): number {
  return a * b;
}

// function dengan parameter string atau number dan tanpa return value
function check(param: number | string): void {
  console.log(param);
}
