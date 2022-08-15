class Node {
    constructor(data, hash) {
      this.hash = hash;
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class bst {
    //first constructor call only neds array as input, orders de array and removes duplicates before creating de tree;
    constructor(array) {
      array.sort((a, b) => a - b);
      let filtered = array.filter((item, index) => array.indexOf(item) === index);
      this.root = this.buildTree(filtered);
    }
  
    hashFunction(
      data,
      func = (data) => {
        return data;
      }
    ) {
      return func(data);
    }
  
    buildTree(array, init = 0, end = array.length - 1) {
      if (end < init) {
        return null;
      }
      let middle = Math.floor((end + init) / 2);
      let root = new Node(array[middle], this.hashFunction(array[middle]));
      root.left = this.buildTree(array, init, middle - 1);
      root.right = this.buildTree(array, middle + 1, end);
      return root;
    }
  
    insert(data) {
      let test = this.find(data);
      if (typeof test != "string") {
        return "this node already exist";
      }
      let cur = this.root;
      let hash = this.hashFunction(data);
      do {
        if (hash > cur.hash) {
          if (cur.right != null) {
            cur = cur.right;
          } else {
            cur.right = new Node(data, this.hashFunction(data));
            break;
          }
        } else {
          if (cur.left != null) {
            cur = cur.left;
          } else {
            cur.left = new Node(data, this.hashFunction(data));
            break;
          }
        }
      } while (cur != null);
    }
  
    delete(data) {
      let hash = this.hashFunction(data);
      let toDelete = this.find(hash);
      let curr;
      let curParent;
      if (typeof toDelete == "string") {
        return "node not found";
      }
      if (toDelete.right != null) {
        curParent = toDelete;
        curr = toDelete.right;
        if (curr.left == null) {
          toDelete.hash = curr.hash;
          toDelete.data = curr.data;
          toDelete.right = curr.right;
          return;
        }
        while (curr.left != null) {
          curParent = curr;
          curr = curr.left;
        }
        toDelete.hash = curr.hash;
        toDelete.data = curr.data;
        curParent.left = null;
        return;
      }
      if (toDelete.left != null) {
        curParent = toDelete;
        curr = toDelete.left;
        if (curr.right == null) {
          toDelete.hash = curr.hash;
          toDelete.data = curr.data;
          toDelete.left = curr.left;
          return;
        }
        while (curr.right != null) {
          curParent = curr;
          curr = curr.right;
        }
        toDelete.hash = curr.hash;
        toDelete.data = curr.data;
        curParent.right = null;
        return;
      }
      curr = this.root;
      let left = curr.left;
      let right = curr.right;
      while (left.hash != hash && right.hash != hash) {
        if (hash < curr.hash) {
          curr = curr.left;
          if (curr.left != null) {
            left = curr.left;
          }
          if (curr.right != null) {
            right = curr.right;
          }
        } else if (hash > curr.hash) {
          curr = curr.right;
          if (curr.left != null) {
            left = curr.left;
          }
          if (curr.right != null) {
            right = curr.right;
          }
        }
      }
      if (left.hash == hash) {
        curr.left = null;
        return;
      }
      if (right.hash == hash) {
        curr.right = null;
        return;
      }
    }
  
    find(data, current = this.root) {
      let hash = this.hashFunction(data);
      if (hash == current.hash) {
        return current;
      }
      if (hash < current.hash) {
        if (current.left != null) {
          return this.find(hash, current.left);
        }
        return "node not found";
      }
      if (hash > current.hash) {
        if (current.right != null) {
          return this.find(hash, current.right);
        }
        return "node not found";
      }
    }
  
    levelOrder(
      func = (n) => {
        return n;
      }
    ) {
      let queue = [this.root];
      let curr;
      let result = [];
      do {
        curr = queue[0];
        queue.shift();
        if (curr.left != null) {
          queue.push(curr.left);
        }
        if (curr.right != null) {
          queue.push(curr.right);
        }
        result.push(func(curr.data));
      } while (queue.length != 0);
      return result;
    }
  
    inOrder(
      func = (n) => {
        return n;
      },
      result = [],
      curr = this.root
    ) {
      if (curr.left != null) {
        result = this.inOrder(func, result, curr.left);
      }
      result.push(func(curr.data));
      if (curr.right != null) {
        result = this.inOrder(func, result, curr.right);
      }
      return result;
    }
  
    preOrder(
      func = (n) => {
        return n;
      },
      result = [],
      curr = this.root
    ) {
      result.push(func(curr.data));
      if (curr.left != null) {
        result = this.preOrder(func, result, curr.left);
      }
      if (curr.right != null) {
        result = this.preOrder(func, result, curr.right);
      }
      return result;
    }
  
    postOrder(
      func = (n) => {
        return n;
      },
      result = [],
      curr = this.root
    ) {
      if (curr.left != null) {
        result = this.postOrder(func, result, curr.left);
      }
      if (curr.right != null) {
        result = this.postOrder(func, result, curr.right);
      }
      result.push(func(curr.data));
      return result;
    }
  
    height(data, currentHeight = 0) {
      let curr = this.find(data);
      if (curr.left == null && curr.right == null) {
        return currentHeight;
      }
      let right = curr.right;
      let left = curr.left;
      let rightHeight = 0;
      let leftHeight = 0;
      if (right != null) {
        rightHeight = this.height(right.data, currentHeight + 1);
      }
      if ((left = null)) {
        leftHeight = this.height(left.data, currentHeight + 1);
      }
      let maxHeight = Math.max(rightHeight, leftHeight);
      return maxHeight;
    }
  
    depth(data, current = this.root, currentDepth = 0) {
      let hash = this.hashFunction(data);
      if (hash == current.hash) {
        return currentDepth;
      }
      if (hash < current.hash) {
        if (current.left != null) {
          return this.depth(hash, current.left, currentDepth + 1);
        }
        return "node not found";
      }
      if (hash > current.hash) {
        if (current.right != null) {
          return this.depth(hash, current.right, currentDepth + 1);
        }
        return "node not found";
      }
    }
  
    isBalanced(node = this.root) {
      let right = this.inOrder(
        (a) => {
          return a;
        },
        [],
        this.root.right
      ).length;
      if (node.right != null) {
        if (typeof this.isBalanced(node.right) == "tree is unbalanced") {
          return "tree is unbalanced";
        }
      }
      let left = this.inOrder(
        (a) => {
          return a;
        },
        [],
        this.root.left
      ).length;
      if (node.left != null) {
        if (typeof this.isBalanced(node.left) == "tree is unbalanced") {
          return "tree is unbalanced";
        }
      }
      let diference = Math.abs(right - left);
      if (diference > 1) {
        return "tree is unbalanced";
      } else {
        return "tree is balanced";
      }
    }
  
    reBalance() {
      let newArray = this.inOrder();
      this.root = this.buildTree(newArray);
    }
  }
  
  let test = [
    1, 2, 3, 4, 5, 10, 11, 12, 13, 6, 7, 8, 9, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5,
    10, 11, 12, 13, 6, 7, 8, 9, 14, 15, 16, 17, 18,
  ];
  
  let testbst = new bst(test, 0, test.length - 1);
  
  console.log(testbst);
  console.log("----Delete----");
  testbst.delete(1);
  console.log("----1----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.delete(4);
  console.log("----4----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.delete(7);
  console.log("----7----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  console.log(testbst.find(5));
  testbst.delete(5);
  console.log("----5----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.delete(15);
  console.log("----15----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  console.log("----Insert----");
  testbst.insert(1);
  console.log("----1----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.insert(4);
  console.log("----4----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.insert(7);
  console.log("----7----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.insert(5);
  console.log("----5----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.insert(15);
  console.log("----15----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  testbst.insert(255);
  console.log("----255----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  console.log(testbst.find(255));
  testbst.insert(25);
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  console.log("---- 25 ----");
  console.log(testbst.inOrder());
  console.log(testbst.levelOrder());
  console.log("---- levelOrder ----");
  console.log(
    testbst.levelOrder((n) => {
      return n / 2;
    })
  );
  console.log("---- inOrder ----");
  console.log(testbst.inOrder());
  console.log(
    testbst.inOrder((n) => {
      return n / 2;
    })
  );
  console.log("---- preOrder ----");
  console.log(testbst.preOrder());
  console.log(
    testbst.preOrder((n) => {
      return n / 2;
    })
  );
  console.log("---- postOrder ----");
  console.log(testbst.postOrder());
  console.log(
    testbst.postOrder((n) => {
      return n / 2;
    })
  );
  console.log("---- depth ----");
  console.log(testbst.find(8));
  for (let i = 0; i < 18; i++) {
    let test = testbst.depth(i + 1);
    console.log(test, i + 1);
  }
  console.log("---- height ----");
  for (let i = 0; i < 18; i++) {
    let test = testbst.height(i + 1);
    console.log(test, i + 1);
  }
  console.log("---- balance ----");
  console.log(testbst.isBalanced());
  testbst.insert(56);
  testbst.insert(78);
  testbst.insert(150);
  console.log("---- balance after few insertions----");
  console.log(testbst.levelOrder());
  console.log(testbst.isBalanced());
  testbst.delete(6);
  testbst.delete(5);
  testbst.delete(1);
  console.log("---- balance after few deletions----");
  console.log(testbst.levelOrder());
  console.log(testbst.isBalanced());
  console.log("---- balance after rebalance----");
  testbst.reBalance();
  console.log(testbst.isBalanced());
  for (let i = 18; i < 200; i++) {
    testbst.insert(i + 1);
  }
  console.log("---- balance after 200 insertions in one side----");
  console.log(testbst.levelOrder());
  testbst.reBalance();
  console.log(testbst.isBalanced());
  console.log("---- depth ----");
  console.log(testbst.find(8));
  for (let i = -25; i < 200; i++) {
    let test = testbst.depth(i + 1);
    console.log(test, i + 1);
  }
  console.log("---- height ----");
  for (let i = 0; i < 200; i++) {
    let test = testbst.height(i + 1);
    console.log(test, i + 1);
  }