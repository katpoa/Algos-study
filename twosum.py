class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # brute force - 'time limit exceeded' answer
        # indices = []
        # for i in range(len(nums)):
        #     for j in range(len(nums)):
        #         if i != j and nums[j] == target - nums[i]:
        #             indices.append(i)
        #             indices.append(j)
        #             return indices
        # return "no solution"
        
        # using hash tables
        hashTable = {}
        for i in range(len(nums)):
            if not nums[i] in hashTable.values():
                hashTable[i] = nums[i]
            if target - nums[i] in hashTable.values() and nums.index(target - nums[i]) != i:
                return [i, nums.index(target - nums[i])]
        return "no solution"
    
