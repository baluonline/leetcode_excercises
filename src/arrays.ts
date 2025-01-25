export class ArraysChallenge {


  moveZeroes(nums: number[]): void {
    let writePointer = 0;
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
      const val = nums[readPointer]
      nums[readPointer] = 0
      if (val != 0) {
        nums[writePointer] = val
        writePointer++
      }
    }
    console.log(nums)
  }
  isSubsequence(s: string, t: string): boolean {
    const s_array = [...s]
    let t_index = 0
    return s_array.every((char) => {
      for (; t_index < t.length;) {
        if (t[t_index++] === char) return true
      }
      return false
    })
  };
  maxArea(height: number[]): number {
    const n = height.length
    // use two pointers
    // height: to track the minimum height(length) of the container
    // because we don't have to form slant
    // so take minimum height and maximum right 
    // it will form rectangle not slant
    // right: for right x-axis of container 

    // left : first element assuming min height
    // right : max right
    // ans to store max area(max amount of water in a container)
    let left = 0
    let right = n - 1
    let ans = Number.MIN_SAFE_INTEGER

    // height works on value
    // right works on index

    while (left < right) {
      // calculate min height 
      // check whether left pointer or right pointer value
      let area = 0

      // if left pointer value is less than right increase value 
      // move towards right
      if (height[left] < height[right]) {
        area = height[left] * (right - left)
        left++
      }

      // if right pointer value is less then decrease it's value
      // move towards left
      else {
        area = height[right] * (right - left)
        right--
      }

      // store the max area
      ans = Math.max(ans, area)
    }

    return ans
  };
  maxOperations(nums: number[], k: number): number {
    let operations = 0
    let left = 0
    let right = nums.length - 1
    const sortedNums = nums.sort((a, b) => a - b);

    while (left < right) {
      if ((sortedNums[left] + sortedNums[right]) === k) {
        left++
        right--
        operations++
      }
      if (sortedNums[left] + sortedNums[right] > k) {
        right--
      }
      if (sortedNums[left] + sortedNums[right] < k) {
        left++
      }

    }
    return operations;
  };

  findMaxAverage(nums: number[], k: number): number {
    let sum = 0
    let res
    for (let i = 0; i < k; i++) {
      sum += nums[i]
    }
    res = sum
    for (let i = k; i < nums.length; i++) {
      sum += nums[i] - nums[i - k]
      res = Math.max(res, sum)
    }
    return res / k
  }


  maxVowels(s: string, k: number): number {

    const set: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);
    let left = 0
    let right = k - 1
    let count = 0
    for (let i = 0; i < k; i++) {
      if (set.has(s.charAt(i))) {
        count += 1
      }
    }
    let maxVal = count
    while (right < s.length) {
      right++
      if (set.has(s[left])) {
        count--
      }
      left++
      if (set.has(s.charAt(right))) {
        count++
      }
      maxVal = Math.max(count, maxVal)
    }


    return maxVal
  }

  longestOnes(nums: number[], k: number): number {
    let left = 0, right = 0, zeroCount = 0, max = 0;

    while (right < nums.length) {
      if (nums[right] == 0) zeroCount++
      while (zeroCount > k) {
        if (nums[left] == 0) zeroCount--
        left++
      }
      max = Math.max(max, right - left + 1)
      right++
    }
    return max;
  };
  longestSubarray(nums: number[]): number {
    let left = 0, right = 0, subArrayLenght = 0, max = 0, zeroCount = 0

    while (right < nums.length) {
      if (nums[right] == 0) {
        zeroCount++
      }

      while (zeroCount > 1) {
        if (nums[left] == 0) zeroCount--
        left++
      }
      max = Math.max(max, right - left + 1)
      right++ //[0,1,1,1,0,1,1,0,1]
    }
    // return subarray size - 1 as we need to remove 0 in this question instead of flipping.
    return max - 1
  };
  largestAltitude(gain: number[]): number {
    let maxAltidude: number = 0, sum: number = 0
    for (let i of gain) {
      sum = sum + i
      maxAltidude = Math.max(sum, maxAltidude)
    }
    return maxAltidude
  };
  pivotIndex(nums: number[]): number {

    let rightSum = nums.reduce((a, b) => a + b, 0)
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
      if (rightSum - leftSum - nums[i] == 0) {
        return i
      } else {
        leftSum = leftSum + nums[i]
        rightSum -= nums[i]
      }
    }
    return -1
  };
  findDifference(nums1: number[], nums2: number[]): number[] {
    // Create sets to store unique elements in nums1 and nums2
    const uniqueNum1 = new Set(nums1);
    const uniqueNum2 = new Set(nums2);

    // Find distinct integers in nums1 that are not present in nums2
    const diff1: number[] = [...uniqueNum1].filter((num) => !uniqueNum2.has(num));

    // Find distinct integers in nums2 that are not present in nums1
    const diff2: number[] = [...uniqueNum2].filter((num) => !uniqueNum1.has(num));

    // Return the result as a 2D array
    return [diff1, diff2]
  };
  uniqueOccurrences(arr: number[]): boolean {
    let map = new Map() //[1,2,2,1,1,3]

    for (let ele of arr) {
      if (map.has(ele)) {
        map.set(ele, map.get(ele) + 1)
      } else {
        map.set(ele, 0)
      }
    }
    return map.size === new Set(map.values()).size
  };
  // 1657. Determine if Two Strings Are Close

  //we declare two hash maps to store frequency map of characters from both strings, then we iterate and count frequency. After that we create two arrays to put frequencies in it, each array corresponds with it's stringm then we iterate over first map and check that it's key are also in second map, if no then we return fasle, if yes we put corresponding value in it's associated with this string array, then we sort them and stringify it to check if they are equals.
  closeStrings(word1: string, word2: string): boolean {
    if (word1.length < word2.length) return false
    const map1 = new Map<string, number>()
    const map2 = new Map<string, number>()

    for (let i = 0; i < word1.length; i++) {
      map1.set(word1[i], map1.has(word1[i]) ? map1.get(word1[i]) + 1 : 1)
    }
    for (let i = 0; i < word2.length; i++) {
      map2.set(word2[i], map2.has(word2[i]) ? map2.get(word2[i]) + 1 : 1)
    }
    console.log('end')
    let mapKeys1 = [...map1.keys()].sort().toString()
    let mapKeys2 = [...map2.keys()].sort().toString()

    if (mapKeys1 != mapKeys2) return false

    var mapValues1 = [...map1.values()].sort().toString();
    var mapValues2 = [...map2.values()].sort().toString();
    return mapValues1 === mapValues2
  };

  //[[3,2,1],[1,7,6],[2,7,7]]
  equalPairs(grid: number[][]): number {
    let count: number = 0, j: number = 0
    let rowMap = new Map<string, number>()
    let len = grid.length
    for (let i = 0; i < len; i++) {
      const str = JSON.stringify(grid[i])
      rowMap.set(str, (rowMap.get(str) || 0) + 1)

    }

    while (j < len) {
      const Columngroup: number[] = []
      for (let i = 0; i < len; i++) {

        Columngroup.push(grid[i][j])

      }

      const colStr = JSON.stringify(Columngroup)
      if (rowMap.has(colStr)) count += rowMap.get(colStr) || 0
      j++
    }

    return count
  };

  removeStars(s: string): string {
    let stack: string[] = []
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "*") {
        stack.push(s[i])
      } else {
        stack.pop()
      }
    }
    return stack.join("")
  };

  // 3[a]2[bc]
  decodeString(s: string): string {
    let match = s.match(/(\d+)\[([a-z]+)\]/)
    while (match) {
      s = s.replace((/(\d+)\[([a-z]+)\]/), match[2].repeat(parseInt(match[1])))
      match = s.match(/(\d+)\[([a-z]+)\]/)
    }
    return s
  };

  deleteMiddle(head: ListNode | null): ListNode | null {

    // check that linkedlist have more than head node, if not return null
    if (!head || !head.next) {
      return null
    } else {
      // declare slow pointer
      let slow = head
      // declare fast pointer
      let fast = slow.next?.next
      // iterate over linked list until fast pointer reach end of it
      while (fast && fast.next) {
        // move slow pointer
        slow = slow.next;
        // move fast pointer
        fast = fast.next.next
      }
      // get next next slow pointer node
      const next = slow.next.next;
      // pointing current slow.next pointer to next node, deleting node in between them
      slow.next = next
      // return head pointer
      return head
    }
  };


}

class RecentCounter {
  c = 0;
  list: number[]
  constructor() {
    this.c = 0
    this.list = [];
  }

  ping(t: number): number {
    // returns the number of requests that has happened in the past 3000 ms 
    this.list.push(t);
    while (this.list[0] < (t - 3000)) {
      this.list.shift();
    }

    return this.list.length;


  }

}


export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
// 2629. Function Composition
/* Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output. */
// Array.prototype.reduceRight()

// The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
/* var compose = function(functions:any) {
  return x=>functions.reduceRight((acc:any,f:any)=>f(acc),x)

};

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}; */

// 2666. Allow One Function Call
/* 
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined. */
/* function once(fn: Function): OnceFn {
  let called:boolean = false
  return function (...args:any[]) {
      called=true;
      return fn(...args)
  };
} */
/**
 * @param {Function} fn
 * @return {Function}
 */
/* var once = function(fn) {
  let called = false
  return function(...args){
      if(!called){
          called=true;
          return fn(...args)
      }
  }
}; */
