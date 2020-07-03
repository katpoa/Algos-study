class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        # if either number of ( or ) is less than n, add
        sets = []
        def sumTotal(solution = '', left = 0, right = 0):
            if len(solution) == 2*n:
                sets.append(solution)
                return
            if left < n:
                sumTotal(solution + '(', left + 1, right)
            if right < left:
                sumTotal(solution + ')', left, right + 1)
        sumTotal()
        return sets 
