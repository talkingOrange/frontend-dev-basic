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

// usage
myAsyncFn("data") // 성공한 경우의 파라미터
  .then(function (result) {
    //성공
    console.log(result);
  })
  .catch(function (error) {
    console.log(error); //실패
  });

console.log("wait...");
