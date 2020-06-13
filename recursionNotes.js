/*
Looping
- Iterative
- Recursive 

Cost for recurrsion
- stack calls
- constants used per getting function onto stack 
- stack overflow (infinite loop)

Recursive strategies:
- write base case (break conditions)
   - base case's return should be the solution to that subset problem AT THAT FUNCTION INSTANCE
- assume the recursive call gives you what you want (treat it like magic)
- don't overthink; don't "unwind the stack"

Recursive anti-patterns:
- avoid having "global" params that have a track record for what prior/future calls did

  * perk: because recursion is like a religion (as snyder says), you write a base case and trust that
  * it will work
  * 
  * 1) we need to be able to express the current problem in terms of smaller version of the current problem
  *    in particular how do you use smaller versions to solve currnet problem
  * 2) write base case
  * 3) assume the recursive call gives you what you want
  * 
  * sort of like proof by induction -- prove something works for the first case, then
  * it should work for all other cases
  * 
  * tips:
  *     - don't unwind the stack. as long as the base cases are right, you can focus on how to make the recursive calls
    - trust in the recursion!

  *     - if the input is a simple value, probably don't need helper method. however, most of the time
  *       you'll want to write a helper that iterates through a subproblem of the overall problem
  *         - most of the time, you will probably want to write an auxiliary function
  *     - think of base cases as answers to the problem at a certain input
  * 
  * recursion antipatterns:
  *     - tracking the answer as you move through -- rather, the answer should be contained 
  *       within the return value
  * 
  */

/* from katie (previous lesson).....
Ex.
function a(n) {
  if (n <= 0) {
    print(“done”)
  } else }
    a(n - 1)
  }
}
a(5)
Each function call = stack
O(n)
usually Stack overflow crash not *timeout
RAM (needed for comp to run) vs storage (saved to hard drive) 
Appending to an arr n times, O(n), bc amt of space needed grows with input size
Ex.
while a > 0:
  a = a - 1
O(1)
for loop is basically just a while loop reformatted


stack overflow: taking up too much space
*/
// -----------------------

// example of fibonacci sequence: 1 1 2 3 5 8 13 21
function fibonacci(n) {
    if (n = 0){
        return 1
    }
    if (n = 1){
        return 1
    }

    // assume that this will give you the fib 2 spaces before the current one
    var firstNum = fibonacci(n-2)

    // assume that this will give you the fib 1 space before the current
    // one (the previous one)
    var secondNum = fibonacci(n-1)

    return firstNum + secondNum
}
