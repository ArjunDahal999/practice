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
var reverseList = function (head) {
  //   let arr = [];
  //   let curr = head;
  //   let newL = new ListNode(0);
  //   let newLcurr = newL;
  //   while (curr) {
  //     arr.push(curr.val);
  //     curr = curr.next;
  //   }
  //   for (i = arr.length - 1; i >= 0; i--) {
  //     console.log(arr[i]);
  //     newLcurr.next = new ListNode(arr[i]);
  //     newLcurr = newLcurr.next;
  //   }
  //   return newL.next;

  let prev = null;
  let curr = head;
  let nextNode;

  while (curr) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
};

class ListNode {
  constructor(val, next) {
    this.val = val ?? undefined;
    this.next = next ?? null;
  }
}

// 1 -> 2->6->3

// null <-- 1 <--2 <--6--<3
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(6);
let node4 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;

reverseList(node1);
