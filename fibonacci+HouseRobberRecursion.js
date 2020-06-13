// House Robber leetcode
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 400
*/


/*
 * leetcode problems
 *
 * 1) https://leetcode.com/problems/house-robber/
 * 
 * 
 */

 // 1 - Leetcode #198 House Robber

 /**
 * @param {number[]} nums
 * @return {number}
 * 
 * first stab
 * why is this wrong? not just dealing with a simple number like
 * fibonacci. so we have to deal with some "movement" 
 */
var rob = function(nums) {
    var firstHouse = rob(nums[i])
    var secondHouse = rob(nums[i+1])
    var thirdHouse = rob(nums[i+2]) // don't have to define this -- the recursive calls will take care of that
    
    if (firstHouse+thirdHouse > secondHouse){
        return firstHouse+thirdHouse
    }
    
    return secondHouse
};

// justAdded flag is kind of an antipattern -- unless there are some major
// edge cases, but this is rare

// justAdded is violating the rule where you're looking at 
// more than one layer in the stack

// how much money do we have if we don't have any more houses to rob
// []

function fibonacci(n) {
  if (n === 0) {
    return 1
  } 
  if (n === 1) {
    return 1
  }

  var firstnum = fibonacci(n-2) // assume that this gives me the fibonacci number @ n-2
  var secondnum = fibonacci(n-1) // assume that this gives me the fibonacci number @ n-1

  return firstnum + secondnum;
}

-----------------------

// don't want to take a slice of the array -- that's O(n) time
// vs taking aux(index+1) --> this is constant time, O(1)


/** SOLUTION
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    function aux(index) {
    // base cases
      if (index >= nums.length) { // O(1)
              return 0;
      }
      var robCurrent = nums[index] + aux(index  + 2)  // O(1),  O(1) single call to func
      var robOther = aux(index + 1) // O(1)
      return Math.max(robCurrent, robOther) // O(1)
    }
  return aux(0)
  // return robRecursive(nums, 0, 0, false);
};

// time complexity: number of calls is 1.6^n, so 1.6^n * 1 = 1.6^n
//      actually the same time complexity as fibonacci - if you look at the two
//      functions, you should see they look very similar.
// space complexity: remember to account for stack space on top of everything else

/* RULES of Recursion
1) we need to be able to express the current problem in terms of smaller versions of the current problem
  in particular how do you use smaller versions to solve currnet problem
2) write base cases
3) assume the recursive call gives you what you want (treat it almost like magic)
*/

// amount of work per call * number of calls

// another syntax to shorten code
	    if (nums === []) {
       	 return 0;
    	}
      var robCurrent = nums[0] + aux(nums[2:])
      var robOther = aux(nums[1:])
      return max(robCurrent, robOther)


-----------------------

/** Jenn's solution
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    [1 2 3 4 5 6 7]
    var firstHouse = rob(nums[i])
    var secondHouse = rob(nums[i+1])
    var thirdHouse = rob(nums[i+2])
    
    if (firstHouse+thirdHouse > secondHouse){
        return firstHouse+thirdHouse
    }
    
    return secondHouse
};


//Joe's method
var robRecursive = function(nums, index, money, justAdded) {
    
    // base cases
    if (index === nums.length - 1) {
        return money;
    }
    
    // generic flow
    var robCurrHouse = robRecursive(nums, (index + 1), (money += nums[index]), true);
    var robNextHouse = robRecursive(nums, (index + 1), money, false);
    return Math.max(robCurrHouse, robNextHouse);
}
