// Binary Tree
// Binary search tree is specific type of binary tree where lesser numbers are to the left and greater numbers are to the right

class Solution {
    solve(n, e, o, t) {
        var year = 0;
        while (n < t) {
            if (year % 2 === 0) {
                n = n * (1 + e/100)
            } else if (year % 2 === 1) {
                n = n * (1 + o/100)
            }
            year++;
        }
        return year;
    }
}

// time: O(logn) space: O(1)

// write a function that will determine whether s1 can be the same as s0 after removing a single letter from s0
class Solution {
    solve(s0, s1) {
        s0 = s0.split('') //n
        s1 = s1.split('') //n
        for (var i = 0; i < s0.length; i++) { //n
            if (s0[i] !== s1[i]) {
                delete s0[i] //n
                s0 = s0.join('') //n
                s1 = s1.join('') //n
                return s0 === s1;
            }
        }
        return false;
    }
}

//time: T(n) = 5s0
//O(n)
//space: O(n)

class Solution {
  // time: O(s0^2)
  // space: O(s0)
  solve(s0, s1) {
    for (let i = 0; i < s0.length; i++) {
      // each iteration: drop character at current index
      let substring = s0.slice(0, i) + s0.slice(i + 1, s0.length);
      if (substring === s1) {
        return true;
      }
    }
    return false;
  }
}

/*
K Prefix
Given a list of integers nums and an integer k, return the maximum possible i where nums[0] + nums[1] + ...  + nums[i] ≤ k. Return -1 if no valid i exists.

Constraints
Length of nums ≤ 1000
-1,000 ≤ nums[i] ≤ 1,000
k ≤ 10^9

Example 1

nums = [3, -5, 4, 1, 6]
k = 4
Output
3

Explanation
The largest i here is 3, since we have nums[0] + ... + nums[3] = 3 and if we added the next number (6) the sum would no longer be less than k.
*/

class Solution {
    solve(nums, k) {
        let sum = 0;
        let maxIndex = -1 //***
        for (let i = 0; i <= nums.length; i++) {
            sum += nums[i];
            if (sum <= k) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }
}

