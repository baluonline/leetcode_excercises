// 2621. Sleep
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// 2715. Timeout Cancellation

const timeOut = function (fn, maxTimeOut) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const timerId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, maxTimeOut);
      try {
        const result = await fn(...args);
        resolve(result);
      } catch (err) {
        clearTimeout(timerId);
      }
    });
  };
};

var promiseAll = function (functions) {
  return new Promise(async (resolve, reject) => {
    if (functions.length == 0) {
      resolve([]);
      return [];
    }
    let res = new Array(functions.length).fill(null);
    let responseCount = 0;

    functions.forEach(async (func, idx) => {
      try {
        const result = await func();
        res[idx] = result;
        responseCount++;
        if (responseCount == functions.length) {
          resolve(res);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};


var isEmpty = function(obj) {
  return Object.values(obj).length>0?false:true
};

var chunk = function (arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
  }
  return result;
};