// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isPalindrome = function (s) {
	let tmp = []
	//First, loop through string s and keep only letters
	s = s.toLowerCase()
	for (let i = 0; i < s.length; i++) {
		console.log(s[i].charCodeAt(0))
		if (
			(s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) ||
			!isNaN(parseInt(s[i]))
		) {
			tmp.push(s[i])
		}
	}
	return tmp.join('') === tmp.reverse().join('')
}
