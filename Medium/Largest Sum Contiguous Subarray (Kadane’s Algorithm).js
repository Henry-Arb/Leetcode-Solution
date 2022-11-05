// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxSubArray = function (nums) {
	//Initializes maxInt to be the max int value supported
	//by JavaScript
	const maxInt = Math.pow(2, 53)
	//Sets currentMax value to be the lowest possible number
	//supported by JavaScript
	let currMax = -maxInt - 1
	//Set current maximum to zero.
	let maxHere = 0
	//Loop through the array nums
	for (let i = 0; i < nums.length; i++) {
		//Add current value of nums to maxHere
		maxHere = maxHere + nums[i]
		//If currMax is less than maxHere replace currMax
		//with maxHere value. Stores the current largest sum.
		if (currMax < maxHere) {
			currMax = maxHere
		}
		//If maxHere is less than 0 set maxHere to be zero.
		if (maxHere < 0) {
			maxHere = 0
		}
	}
	return currMax
}
