/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 3 --> 2 --> 0 --> -4
//      ^------------|
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let dummy1 = head;
  let dummy2 = head;

  while (dummy1 && dummy2 && dummy2.next) {
    dummy1 = dummy1.next;
    dummy2 = dummy2.next.next;
    if (dummy1 == dummy2) return true;
  }
  return false;
};

class ListNode {
  constructor(val, next) {
    this.val = val ?? undefined;
    this.next = next ?? undefined;
  }
}

const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
//node4.next = node2;

console.log(hasCycle(node1));
