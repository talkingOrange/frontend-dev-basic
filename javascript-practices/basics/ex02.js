/**
 * 변수와 자료형
 *
 * 기본타입
 * - undefined
 * - number
 * - string
 * - boolean
 *
 * 객체
 * - object
 * - function
 *
 */

console.log("=== 기본 타입(undefined, number, string, boolean) ===");
10; // 에러발생 X
// v; 에러발생 reference error
v = 10; // 에러발생 X
var u;
var u = undefined; // var u;와 동일, 자바스크립트는 정의와 선언을 구분하지 않는다.
var i = 10;
var s = "Hello World";
var b = true;

console.log(u + ":" + typeof u);
console.log(i + ":" + typeof i);
console.log(v + ":" + typeof v);
console.log(s + ":" + typeof s);
console.log(b + ":" + typeof b);

console.log("=== 객체 타입(object)) ===");

var F = function (a) {
  this.a = a;
};

F(20);
console.log(a, typeof F);


var o = new F(10);
console.log(o.a, typeof o);

console.log("//////////////////////");

var i2 = new Number(10);
var s2 = new String("Hello");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();

console.log(i2 + ":" + typeof i2 + ":" + (i2 instanceof Number));
console.log(b2 + ":" + typeof b2 + ":" + (b2 instanceof String));
console.log(o + ":" + typeof o + ":" + (o instanceof Boolean));
console.log(a + ":" + typeof a + ":" + (a instanceof Object));
console.log(d + ":" + typeof d + ":" + (d instanceof Date));

// 유사 객체

// String의 기본 타입인 경우, String.prototype.concat, substring, indexOf 를 사용할 수 없다.
// 근데, var로 변수를 선언해도 원칙적으로 안되지만, String이면 자동으로 new로 호출해서 실행시켜준다.
// 즉, 객체타입은. 기본타입의 메서드를 불러서 사용하고 싶기 때문에 존재한다.

console.log("=== 원시 타입도 메소드를 호출할 수 있다. (유사객체) ====");
console.log(b2.valueOf());
console.log(b.valueOf()); //console.log(new Boolean(b).valueOf())
console.log(new Boolean(b).valueOf());
