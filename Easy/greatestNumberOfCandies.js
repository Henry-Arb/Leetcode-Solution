// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
var kidsWithCandies = function (candies, extraCandies) {
	return candies.map((kid) => {
		if (kid + extraCandies >= Math.max(...candies)) {
			return true
		}
		return false
	})
}
