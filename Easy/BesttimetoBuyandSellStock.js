/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	//Loop through the prices array.
	//Find the day with the lowest price.
	//Find the day after with the highest price.

	//Initialize lowest price as the first price in the arr.
	let min = prices[0]

	//Initialize profit as zero, since we want to return 0 if no profit can be made.
	let profit = 0

	for (let i = 0; i < prices.length; i++) {
		//If prices[i] < min, min = prices[i]
		if (prices[i] < min) {
			min = prices[i]
		}
		//find max profit
		profit = Math.max(profit, prices[i] - min)
	}
	return profit
}
