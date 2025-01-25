var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log("two Sum: " + JSON.stringify(twoSum([5, 2, 7, 10, 3, 9], 8)));

var repeatedCharacter = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) return s[i];
    map.set(s[i], i);
  }
  return null;
};
console.log("repeatedCharacter: " + repeatedCharacter("abcdea"));

// 3: Given an integer array nums, find all the unique numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

let findNumbers = function (nums) {
  let ans = [];
  let set = new Set(nums);
  for (let num of set) {
    if (!set.has(num + 1) && !set.has(num - 1)) {
      ans.push(num);
    }
  }
  return ans;
};
// console.log("findNumbers " + findNumbers([1, 2, 3, 4, 5]));

/* A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 */

var checkIfPangram = function (sentence) {
  let pangram = false;
  if (sentence.length < 26) {
    return false;
  }
  const set = new Set(sentence);
  let charCode = "";
  for (let i = 0; i < sentence.length; i++) {
    charCode = sentence.charCodeAt(i);
    if (charCode > 96 && charCode < 123) {
      set.add(sentence.charAt(i));
    }
    if (set.size === 26) return true;
  }
  return pangram;
};

/* console.log(
  "checkIfPangram: " + checkIfPangram("thequickbrownfoxjumpsoverthelazydog")
);
console.log(
  "checkIfPangram: leetcode - " + checkIfPangram("uwqohxamknblecdtzpisgvyfjr")
); */

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
  let len = nums.length;
  if (len == 1) {
    if (nums[0] == 0) {
      return 1;
    }
    return 0;
  }
  for (let i = 0; i <= len; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return -1;
};

// console.log("missing 1 " + missingNumber([0, 1]));
// console.log("missing2 " + missingNumber([1, 2]));

// console.log(
//   "missingNumber " +
//     missingNumber([
//       45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11,
//       32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40,
//       34, 30, 25, 47, 0, 31, 42, 24, 10, 14,
//     ])
// );

/* Counting Elements

Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately. */

var countElements = function (arr) {
  let count = 0;
  const set = new Set(arr);
  for (let i of arr) {
    if (set.has(i + 1)) count++;
  }
  return count;
};

// let arr = [1, 3, 2, 3, 5, 0];
// console.log("countElements " + countElements(arr));
// let arr = [1, 1, 3, 3, 5, 5, 7, 7];
// console.log("countElements " + countElements(arr));

//Sliding window
// You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.
let findLongestSubstring = (s, k) => {
  let counts = new Map();
  let left = 0,
    ans = 0;
  for (let right = 0; right < s.length; right++) {
    counts.set(s[right], (counts.get(s[right]) || 0) + 1);
    while (counts.size > k) {
      counts.set(s[left], counts.get(s[left]) - 1);
      if (counts.get(s[left]) == 0) {
        counts.delete(s[left]);
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

console.log("findLongestSubstring " + findLongestSubstring("eceba", 2));
