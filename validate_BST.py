# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
        


class Solution:
    def isValidBST(self, root):
        def aux(node, minimum, maximum):
            if node is None:
                return True
            return minimum < node.val < maximum and aux(node.left, minimum, node.val) and aux(node.right, node.val, maximum)
        return aux(root, float("-inf"), float("inf"))



# go left, append node.val, then go right
class Solution:
    def isValidBST(self, root):
        output = []
        def inorder_traverse(node):
            if node is None:
                return True
            inorder_traverse(node.left)
            output.append(node.val)
            inorder_traverse(node.right)
        inorder_traverse(root)
        return output == sorted(set(output))




class Solution:
    def _getMin(self, root:TreeNode) -> int:

        leftMin = rightMin = float("inf")
        if root.left is not None:
            leftMin = self._getMin(root.left)

        if root.right is not None:
            rightMin = self._getMin(root.right)

        return min(leftMin, rightMin, root.val)


        if (root.left is None):
            return root.val
        return self._getMin(root.left)

    def _getMax(self, root:TreeNode) -> int:
        if (root.right is None):
            return root.val
        return self._getMax(root.right)


    def isValidBST(self, root: TreeNode) -> bool:

        if root is None:
            return True

        print(f"VALUE: {root.val}")

        if (root.left is None and root.right is None):
            return True

        if (root.left is None):
            return root.val < root.right.val and self.isValidBST(root.right)

        if (root.right is None):
            return root.left.val < root.val and self.isValidBST(root.left)

        validLeft = self.isValidBST(root.left)
        validRight = self.isValidBST(root.right)
        validHere = self._getMax(root.left) < root.val < self._getMin(root.right)

        return  validLeft and validRight and validHere
