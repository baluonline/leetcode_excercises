console.log("hare krshna");

console.log(reverseArray([34, 3, 31, 98, 92, 23]));
function reverseArray(arr) {
  const reverse = [];
  for (let i = 0; i < 4; i++) {
    const popItem = arr.pop();
    reverse.unshift(popItem);
  }
  return reverse;
}

console.log("isValidExpression : " + isValidExpression1("()[]"));

function isValidExpression1(s) {
  const stack = [];
  const mappings = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  if (s === undefined || s.length == 0) {
    return false;
  }
  for (let c of s) {
    if (mappings[c]) {
      stack.push(c);
    } else {
      const top = stack.pop();
      if (mappings[top] !== c) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

function isValidExpression(s) {
  let stack = [];

  const mappings = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let c of s) {
    if (mappings[c]) {
      stack.push(c);
    } else {
      let top = stack.pop();
      if (!s.length || mappings[top] !== c) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(
  "isValidPalindrome " + isPalindrome("A man, a plan, a canal: Panama")
);

function isPalindrome(s) {
  const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = newStr.split("").reverse().join("");
  return newStr === reversed;
}

console.log("maxProfit2" + maxProfit2([7, 1, 5, 3, 6, 4]));
function maxProfit2(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minPrice < prices[i]) {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    } else {
      minPrice = prices[i];
    }
  }
  return maxProfit;
}

console.log("search index : " + search([-1, 0, 3, 5, 9, 12], 19));
function search(nums, target) {
  let targetIndex = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (target === nums[i]) {
      targetIndex = i;
    }
  }
  return targetIndex;
}

console.log("primeNumbers: " + primeNumbers(2, 10));
function primeNumbers(low, high) {
  let primes = [];
  if (!low || !high) {
    return primes;
  } else {
    for (let i = low; i < high; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  }
  return primes;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

//transform keys to upper case
const data = [
  { name: "balaji", age: 42 },
  { name: "krshna", age: 50000 },
];

const transformedData = data.map((obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toUpperCase()] = obj[key];
    return acc;
  }, {});
});
console.log(JSON.stringify(transformedData));

const transformedArray = data.map((obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key.toUpperCase()])
  )
);

console.log(JSON.stringify(transformedArray));
