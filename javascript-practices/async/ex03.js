const myAsyncFn = function (param) {
  return new Promise(function (resolve, reject) {
    //
    // 비동기 코드
    //

    setTimeout(function () {
      if (param === "data") {
        resolve("ok");
      } else {
        reject(new Error("fail"));
      }
    }, 2000);
  });
};

// usageII : async ~ await

const ex03 = async function () {
  const result = await myAsyncFn("data"); //Promise 함수를 이용할 때, await를 이용하고, 이를 감싸는 함수에 async를 붙여준다.
  console.log(result);
};

ex03();
console.log("wait...");
