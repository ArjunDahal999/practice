/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let prev = head;
  let temp = head.next;

  while (temp) {
    if (temp.val == prev.val) {
      prev.next = temp.next;
      temp = temp.next;
      continue;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
};

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(4);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(deleteDuplicates(node1));
