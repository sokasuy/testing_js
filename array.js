/* var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
typeof a[90]; // undefined

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
} */

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

let fruits = ['Apple', 'Banana']

console.log(fruits.length)
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
