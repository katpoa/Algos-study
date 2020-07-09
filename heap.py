# Heap - same form as binary tree, but only the parent node is >= or <= all children
# top to bottom traversal is always log(n) time because heaps remain balanced


class Heap:
  def pop():
    "returns the minimum element, in log(n)"
    pass
  
const tree = [0, 1, 2, 3, 4, 5, 6]

def pop(tree): # tree is an array. AKA siftdown, going up the tree. sifting is where you swap positions to maintain min or max    
    root = tree[0]
    last_element = tree[-1]

    # swap root with last element on the last level
    tree[0] = last_element
    tree[-1] = root

    heapq._siftdown(tree, 0)

# if array is 1 indexed: left child of n = 2n, right child of n = 2n + 1
# swap with bottom right, continue swapping 
# with next smallest to get to the bottom
# sift_down

  def push(tree, element):
    tree.push(element)
    heapq._siftup_max(tree, len(tree) - 1)

# start at bottom right
# swap with next min above until 
# you cant find smaller parent node
# sift_up
# python3.8 in terminal
# *heapq.heapify(     *heapq.heappush(    heapq.heapreplace( heapq.nlargest(   
# *heapq.heappop(     heapq.heappushpop( heapq.merge(       heapq.nsmallest(
# heapq._heapify_max(     heapq._siftdown(        heapq._siftup_max(     
# heapq._heappop_max(     heapq._siftdown_max(   
# heapq._heapreplace_max( heapq._siftup(

def heapify(array): # turn an array into a heap
  # log(n) to insert in heap, n times
  # overall time is n * log(n)
  # inserting on bottom row can be focused bc 
  # bottom row accounts for 1/2 of all of the nodes in the heap
  # n/2 * log(n) -> simplifies to n * logn
  
  heapq._siftdown(array[i])
  # Overall O(n) to turn
  # move right to left, building heap backwards
  # call sift_down starting from the bottom row, moving up
  # only the root will take O(n)





