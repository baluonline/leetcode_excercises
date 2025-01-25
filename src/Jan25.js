console.log("hare krshna");

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let tmp = s[left];
    s[left++] = s[right];
    s[right--] = tmp;
    console.log(`left value ${left} - right val ${right}`);
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));

console.log(sortedSquares1([-7, -3, 2, 3, 11]));

function sortedSquares(nums) {
  let n = nums.length;
  let result = [];
  let left = 0;
  let rigth = n - 1;
  for (let i = rigth; i >= 0; i--) {
    let square;
    if (Math.abs(nums[left]) < Math.abs(nums[rigth])) {
      square = nums[rigth];
      rigth--;
    } else {
      square = nums[left];
      left++;
    }
    result[i] = square * square;
  }
  return result;
}
function sortedSquares1(nums) {
  let result = [];
  let length = nums.length;
  let left = 0;
  let rigth = length - 1;
  for (let i = rigth; i >= 0; i--) {
    let square;
    if (Math.abs(nums[left]) < Math.abs(nums[rigth])) {
      square = nums[rigth];
      rigth--;
    } else {
      square = nums[left];
      left++;
    }

    result[i] = square * square;
  }
  return result;
}
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let res = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    res = Math.max(res, sum);
  }
  return res / 4;
}
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

console.log(
  "longestOnes: " + longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)
);
function longestOnes(nums, k) {
  let zeroCount = 0;
  let maxOnes = 0;
  let left = 0;
  while (left < nums.length) {
    if (nums[left] == 0) {
      zeroCount++;
      if (zeroCount == k) {
        maxOnes = Math.max(maxOnes, left);
        zeroCount = 0;
      }
    }
    left++;
  }
  return maxOnes;
}

function answerQueries(nums, queries, limit) {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  let ans = [];
  for (let [x, y] of queries) {
    const accumulate = prefix[y] - prefix[x] + nums[x];
    ans.push(accumulate <= limit);
  }
  return ans;
}
console.log(
  "answerQueries" +
    answerQueries(
      [1, 6, 3, 2, 7, 2],
      [
        [0, 3],
        [2, 5],
        [2, 4],
      ],
      13
    )
);

var minStartValue = function (nums) {
  var minVal = 0;
  var total = 0;

  // Iterate over the array and get the minimum step-by-step total.
  for (var i = 0; i < nums.length; ++i) {
    total += nums[i];
    minVal = Math.min(minVal, total);
  }

  return -minVal + 1;
};

// console.log("min" + minStartValue([2, 3, 5, -5, -1]));
// console.log("min" + minStartValue([-3, 2, -3, 4, 2]));
