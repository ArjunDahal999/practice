/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  /*
  let head1Len = 0;
  let head2Len = 0;
  let dummyA = headA;
  let dummyB = headB;
  while (dummyA) {
    head1Len += 1;
    dummyA = dummyA.next;
  }
  while (dummyB) {
    head2Len += 1;
    dummyB = dummyB.next;
  }

  let diff = Math.abs(head1Len - head2Len);

  for (let i = 0; i < diff; i++) {
    if (head1Len > head2Len) {
      headA = headA.next;
    } else {
      headB = headB.next;
    }
  }

  while (headA != headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;

  */
  const set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (set.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
};

class ListNode {
  constructor(val, next) {
    this.val = val ?? undefined;
    this.next = next ?? undefined;
  }
}

// Create the first linked list: [5,6,1,8,4,5]
let list1 = new ListNode(5);
list1.next = new ListNode(6);
list1.next.next = new ListNode(1);
list1.next.next.next = new ListNode(8);
list1.next.next.next.next = new ListNode(4);
list1.next.next.next.next.next = new ListNode(5);

// Create the second linked list: [4,1,8,4,5]
let list2 = new ListNode(4);
list2.next = new ListNode(1);
list2.next.next = new ListNode(8);
list2.next.next.next = new ListNode(4);
list2.next.next.next.next = new ListNode(5);

// Test the function
console.log(getIntersectionNode(list1, list2));
