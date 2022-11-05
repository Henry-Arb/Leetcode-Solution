/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  */
var lowestCommonAncestor = function (root, p, q) {
	//Return LCA
	//If current node is null return null
	if (root == null) {
		return null
	}
	//If root value is greater than both p AND q then
	//LCA will be on the left subtree.
	if (root.val > p.val && root.val > q.val) {
		console.log('I ran 1')
		return lowestCommonAncestor(root.left, p, q)
	}

	//If root value is less than both p AND q then
	//LCA will be on the right subtree.
	if (root.val < p.val && root.val < q.val) {
		console.log('I ran 2')
		return lowestCommonAncestor(root.right, p, q)
	}
	//If root value lies between p AND q then
	//LCA will be root value
	return root
}
