/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	let arr = []
	for (i = left; i <= right; i++) {
		let tmp = i.toString().split('')
		if (
			tmp.every((num) => {
				if (i % parseInt(num) === 0) {
					return true
				}
			})
		) {
			arr.push(i)
		}
	}
	return arr
}
