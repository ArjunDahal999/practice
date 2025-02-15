/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *  1 -> 2 -> 6 ->5
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  /**
  let dummy = new ListNode(0);
  let dummyhead = dummy;
  while (head) {
    if (head.val != val) {
      console.log(head.val);
      dummyhead.next = new ListNode(head.val);
      dummyhead = dummyhead.next;
    }
    head = head.next;
  }
  return dummy.next;
 */
  let dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;
  while (curr.next != null) {
    if (curr.next.val == val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
};

class ListNode {
  constructor(val, next) {
    this.val = val ?? undefined;
    this.next = next ?? null;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(6);
let node4 = new ListNode(3);
let node5 = new ListNode(4);
let node6 = new ListNode(5);
let node7 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(removeElements(node1, 6));
