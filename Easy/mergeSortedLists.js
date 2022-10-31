/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let current
	//Returns the other list if the other is null
	if (!list1) {
		return list2
	} else if (!list2) {
		return list1
	}

	//Compare which is higher and move the value to next
	if (list1.val < list2.val) {
		current = list1
		list1 = list1.next
	} else {
		current = list2
		list2 = list2.next
	}
	current.next = mergeTwoLists(list1, list2)
	return current
}
