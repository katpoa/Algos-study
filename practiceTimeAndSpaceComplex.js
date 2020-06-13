// Can time complexity be less than space complexity ever?
// Theoretically no because each step that constitutes taking up space in a function also requires time...

function a(n) {
  for (var i = 0; i < n; i++) {
 	  for (var j = i; j < n; j++) {
    
    }
  }
}

n
n - 1
n - 2
n - 3
...
n - n

left side: n^2
right side: 1/2n^2 - n
T(n) = n^2 - 1/2n^2 - n = 1/2n^2
O(n) = n^2


// Review O(logn) space example, time O(logn) - binary search, for loop with i*= 2
// sums every power of 3 numbers
function a(n) {
  var sum = 0;
  for (i = 1; i < n.length; i *= 3) {
    sum += i;
  }
  return sum;
}
// O(logn) time, O(1) space

function b(n) {
  if (n >= 0) {
    b(n/2);
  }
}
// from n -> 1 to 0, constant number of steps until code cuts off to 0, can't store infinite precision
// https://www.mathsisfun.com/algebra/images/infinite-series-1-2n.svg
n = 0
...
n = 1/8
n = 1/4
n = 1/2
n = 1
n = 2
n == 4
// imagine much larger input size, and how b(n/2) decreases time much faster than b(n - 1)

// O(logn) time, O(logn) space
// https://stackoverflow.com/questions/40207735/what-is-the-space-complexity-of-this-algorithm-n-or-logn

// A
function c(n){
  sum = 0;
  for (i = 1; i < n; i *= 2) { 
    for (j = i; j < n; j++) {
      sum++;
    }
  }
  return sum
}

// time: O(n*logn) space: O(1)

console.log(c(10))
console.log(c(100))
console.log(c(1000))
console.log(c(10000))

console.log(10*(Math.log(10)/Math.log(2)));
console.log(100*Math.log(100)/Math.log(2))
console.log(1000*Math.log(1000)/Math.log(2))
console.log(10000*Math.log(10000)/Math.log(2))

// nested for loop execution times
n
n - 2
n - 4
...
n - n/2
^n/2 which becomes O(n)
big terms add and close to n but approach 1
BUT 1 + 2 + 4 + 8... = n!
so left side: n + n + n + n ...+ n 
^logn of n
right side: - n
so overall T(n) = n*logn - n
O(n) = n * logn

// A *2)
function k(n){
  sum = 0;
  for (a = 1; a < n; a *= 2) { 
    for (b = 0; b < a; b++) { // 2^logn
      sum++;
    }
  }
  return sum
}
T(n) = 2^logn = n
// time: O(n) space: O(1)

console.log(k(10));
console.log(k(100))
console.log(k(1000))
console.log(k(10000))

// execution for inner loop

1 + 2 + 4 + 8...n
^small terms add and approach n

(1 + 2 + 4 + 8 + 16 + ... + n -> n)

// B
//* c = some array;
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i * n; j++) { // n^3 - incorporating outer for loop
    sum += j;
  }
  for (k = 1; k <= n; k++) { // 3n^2 - incorporating outer for loop
    var c[k] += sum;
  }
}

 T(n) = n * 1/2 n^2 + 3n^2)
 O(n) = n^3

1n + 2n + 3n + 4n + ... + n*n

n * (1 + 2  + 3 + 4 + ... + n)

(1 + 2  + 3 + 4 + ... + n) = O(n^2)

n * O(n^2) = O(n^3)

// where did c come from?!
// time: O(n**3) space: O(1)

// C
sum = 0;
for (i = 1; i <= n; i++) { // n
  for (j = 1; j <= n; j*=2) { // logn
    for (k = 1; k <= n; k*=3) { // logn
      sum++;
    }
  }
}
// time: O(n*(logn**2)) space: O(1)

Original:
sum = 0;
for (i = 1; i <= n; i++) { // n
  for (j = 1; j <= i; j*=2) { // logn
    for (k = 1; k <= j; k*=3) { // logn
      sum++;
    }
  }
}
:(
