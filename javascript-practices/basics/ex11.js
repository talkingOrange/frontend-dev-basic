/**
 * Array 객체 함수: Array.prototype.*
 */

var colors = ["black", "white", "yellow"];
var fruits = ["apple", "mango", "banana"];

// concat
console.log("=== concat ===");
var a1 = fruits.concat(colors);

console.log(a1); //(6) ['apple', 'mango', 'banana', 'black', 'white', 'yellow']

// pop, push: stack 지원
console.log("=== stack 지원 ===");

var color = colors.pop();
console.log(color); //yellow

colors.push("red");
console.log(colors); //(3) ['black', 'white', 'red']

// join
console.log("=== join ===");
var str = fruits.join(":");
console.log(str); //apple:mango:banana

// reverse
console.log("=== reverse ===");
fruits.reverse();
console.log(fruits); //(3) ['banana', 'mango', 'apple']

// shift
console.log("=== shift ===");

var numbers = [1000, 3000, 4000, 5000, 6000];
var number = numbers.shift();
console.log(number, numbers); //1000 (4) [3000, 4000, 5000, 6000]

// slice
console.log("=== slice ===");

var numbers2 = numbers.slice(1, 3);
console.log(numbers2); //(2) [4000, 5000]

// splice1: index에서 count개를 삭제하고 replace로 대체한 후, 삭제된 요소를 배열로 반환
console.log("=== splice(index, count, replace) ===");

console.log(fruits); //(3) ['banana', 'mango', 'apple']

var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits); //(2) ['banana', 'mango'] (1) ['apple']

// splice2: index에서 count개를 삭제하고 replace로 대체한 후, 삭제된 요소를 배열로 반환
console.log("=== splice(index, count, replace) ===");

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, [10, 20]);
console.log(a1, a2); //(3) [0, Array(2), 4] (3) [1, 2, 3]

// splice3: removeAt(2) 처럼 작동
var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1);
console.log(a3); //(4) [0, 1, 3, 4]

// splice4: insertAt(1, 10) 처럼 작동

var a4 = [0, 1, 2, 3, 4];
a4.splice(1, 0, 10);
console.log(a4); //(6) [0, 10, 1, 2, 3, 4]
