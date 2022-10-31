/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let tmp = {}
	//Loop through nums arr
	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i]
		//If complement exists return its index
		//and current index of i
		if (complement in tmp) {
			return [tmp[complement], i]
		}
		//If complement doesn't exist add current value
		//and its index to the object.
		else {
			tmp[nums[i]] = i
		}
	}
}
