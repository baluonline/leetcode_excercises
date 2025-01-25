function findMaxAverage(nums: number[], k: number): number {
    let max = 0
    let sum = 0
    for (let i = 0; i < nums.length - 1; i++) {
        sum += nums[i]
    }
    let res = 0
    for (let i = k; i < nums.length; i++) {
        res = nums[k] - nums[i]
        res = Math.max(sum, res)
    }

    return res / 4
}
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))


function answerQueries(nums: number[], queries: any[], limit: number) {
    let prefix: any = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }
    let ans = []
    for (let [x, y] of queries) {
        const accumulate = prefix[y] - prefix[x] + nums[x]
        ans.push(accumulate <= limit)
    }
    return ans

}
console.log('answerQueries' + answerQueries([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13))

