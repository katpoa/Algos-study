class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # brute force - 'time limit exceeded' answer
        # for i in range(len(nums)):
        #     for j in range(len(nums)):
        #         if i != j and nums[j] == target - nums[i]:
        #             return [i, j]
        # return [] # keep output data type consistent
        # time complexity: O(N^2)
        # space complexity: O(1)
        
        # using hash table
        hashTable = {}
        for i in range(len(nums)):
            if not nums[i] in hashTable.values():
                hashTable[i] = nums[i]
            if target - nums[i] in hashTable.values() and nums.index(target - nums[i]) != i:
                return [i, nums.index(target - nums[i])]
        return "no solution"
        
        # time complexity: expected O(N) because adding to the hashTable is -> expected O(1)
        #***expected - overloading same bucket/single LL within list of LLs
        #amortized - cost of doubling size when exceed capacity of list of LLs
        # space complexity: O(N)
        
