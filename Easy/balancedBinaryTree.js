// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
var isBalanced = function (root) {
	if (root === null) return true

	return height(root) !== false
}

var height = (node) => {
	if (node === null) {
		return 0
	}

	const leftBranch = height(node.left)
	const rightBranch = height(node.right)

	//If a previous call has returned false,
	//We need to pass false all the way up.
	if (
		leftBranch === false ||
		rightBranch === false ||
		Math.abs(leftBranch - rightBranch) > 1
	) {
		return false
	}

	//Height of a node
	return Math.max(leftBranch, rightBranch) + 1
}
