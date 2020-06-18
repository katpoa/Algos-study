/*
- - HASH TABLES - -

Linked List

Assume youre at the position where you want to do the operation already
Insert: O(1)
Delete: O(1)

Find: O(N)

List
Add/Delete from end: O(1)
Find by index: O(1)
Find by element: O(N)

Binary Search Tree
Find by element: O(logn)
Add/delete with find: log(height) or O(height) depending on structure of tree

Hash Table - a data structure that can give us find in O(1) time
*/

// Hash function - takes element and returns index
function magiclookup(element) {}
  [5 45 2 78 0 1]
// like a coat check with a ticket
// if generic/perfect - everything maps to same index, essentially a list
// impossible to avoid collisions

// list of lists, sorted lists [[] [] [] [] [] []]
// list of linked lists [LL LL LL LL LL LL]
// list of binary search trees

// # of indices incrementing is determined by amount of capacity filled
// for new, larger max indices list, use a new hash function to minimize collisions
// HASH TABLE - list of linked lists implementing hash maps
[LL LL LL LL LL LL LL LL]
    3:'a'.      2:'1'

a = {3: 'a'} // hash map - key: value pair, Javascript objects don't allow multiples of keys
new Map() // = Python dict, single value vs key : value pair
b = set() // doesn't record duplicates

set operations:
  add O(1) // not O(1), worst case O(N) 
  //when we reach max capacity, we have to create another list of linked lists with double size, and copy everything over O(N) cost to do so
  //*"amortized"* O(1) diffuses the cost of the doubling - like filling up gas after long stretch - only in special cases of needing to double total indices
  // **"expected"** O(1) cases where ONE of the LL is overfilled but this case is highly unlikely bc we optimize to evenly spread - probability so low that we can consider it O(1)
  delete O(1) // O(1) amortized and expected
  has O(1) // O(1) expected
  // lookup by index - don't want this
  size O(1) // O(1) normal - implement a counter
  // # of elements

// Java has tree sets, backed by BSTs but 90% use sets instead

// could we have a hash table with all unique hashes - ineffective storagewise to use hash table
// example of having values 1, 2, 3, 1,000,000 so we have more buckets than needed for all unique values


// Hash Map - pairs of values
// Set - single values




