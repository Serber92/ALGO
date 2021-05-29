// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let sortedArrToBST = function(arr) {

  let helper = function(left, right) {
    if (left > right) {
      return null;
    }

    let middle = Math.floor(Math.abs(right + left) / 2);

    let root = new Node(arr[middle]);
    root.left = helper(left, middle - 1);
    root.right = helper(middle + 1, right);

    return root;
  }

  return helper(0, arr.length - 1);
}

let res = sortedArrToBST([-10,-3,0,5,9])
console.log(res);