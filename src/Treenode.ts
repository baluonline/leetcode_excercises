// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

export default class TreeNode<T> {
    data: T;
    children: TreeNode<T>[] = [];
  
    constructor(data: T) {
      this.data = data;
    }
  
    addChild(child: TreeNode<T>) {
      this.children.push(child);
    }
  
    removeChild(child: TreeNode<T>) {
      this.children.splice(this.children.indexOf(child), 1);
    }
  
    getChildren() {
      return this.children;
    }
  
    getParent() {
      return this.parent;
    }
  
    setParent(parent: TreeNode<T>) {
      this.parent = parent;
    }
  }

  



/* 
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null): number[] => {
        // If the current node is null, return an empty array
        if (root === null) {
            return [];
        }

        // Recursively explore the left and right children, and accumulate leaf values
        const leaves = dfs(root.left).concat(dfs(root.right));

        // If 'leaves' is empty, it means this is a leaf node, so return its value
        // Otherwise, it means this is an internal node and 'leaves' contains its subtree's leaves
        return leaves.length > 0 ? leaves : [root.val];
    };

    // Compare the leaf value sequences of both trees
    return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));

}; */

var longestZigZag = function(root) {
    let max = 0;
   const helper = (node, prev, length) => {
       if(node === null)  return null;       
       max = Math.max(max, length);   
       helper(node.left, "l" , prev === "r" ? length + 1 : 1);
       helper(node.right, "r" , prev === "l" ? length + 1 : 1);
   }
   helper(root, "l", 0); 
   return max;
};

var longestZigZag = function(root) {
    function dfs(root, count, prevMove) {
        // Base Case
        if (root === null) return;

        // Compare with max
        maxLength = Math.max(maxLength, count);

        // If previous move was left
        if (prevMove === 'l') {
            // Reset count to 1 for left move
            dfs(root.left, 1, 'l');
            // Increment count for right move
            dfs(root.right, count + 1, 'r');
        } else { // If previous move was right
            // Increment count for left move
            dfs(root.left, count + 1, 'l');
            // Reset count to 1 for right move
            dfs(root.right, 1, 'r');
        }
    }

    let maxLength = 0;
    let count = 0;
    let prevMove = 'l';
    dfs(root, count, prevMove);

    return maxLength;
};

