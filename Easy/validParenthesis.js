/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	//Checks if string s length is even.
	//If length is odd, then its not possible.
	//To be a valid parenthesis.
	if (s.length % 2 === 0) {
		let tmp = []
		//Loops through the string and replaces
		//each open bracket with its own respective
		//closing bracket.
		for (let i = 0; i < s.length; i++) {
			if (s[i] === '{') {
				tmp.push('}')
			} else if (s[i] === '(') {
				tmp.push(')')
			} else if (s[i] === '[') {
				tmp.push(']')
			}
			//Compares the last element of the tmp array
			//with the current value of s[i]. if it is not
			//the same then it is invalid.
			else {
				if (tmp.pop() !== s[i]) {
					return false
				}
			}
		}
		return tmp.length === 0
	}
	return false
}
