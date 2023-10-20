/**
 * 클로저(Closure): 클로저는 함수와 그 함수가 정의되어있을 때 변수 스코프(Lexical Scope)와의 조합
 *
 * 1. 자유변수에 닫혀(closed, 엮어) 있는 함수
 * 2. 클로저는 자신이 정의될 때의 scope를 기억하고 있다.
 * 3. 클로저는 함수가 자신이 정의 되었을 때의 스코프를 기억하여 자신이 정의된 스코프 밖에서 호출되어도 그 스코프에 접근할 수 있는 함수
 * 4. 사용 이유
 *    - 전역 변수 회피
 *    - 상태 유지*: useState
 *    - 정보 은닉 : useState
 */

/** Lexical Scope */
var f1 = function () {
  const s = "Hello World";
  const inner = function () {
    console.log(s);
  };
  inner();
};
f1();

/**Closure */
const f2 = function () {
  const s = "Hello World";

  const inner = function () {
    console.log(s);
  };

  return inner;
};

const closure = f2();
closure();



// 사용 이유 : a 라는 전역변수를 쓰지 않아도 된다. 
function c(){
var a =10;

return function f3(){
    console.log(a)
}}

var f = c();
f();