# graphs for now, dijkstra's algorithm -> heap data structure, topological sort, connected components algorithm, minimum spanning trees

# bfs best way to find shortest path
# dfs sounds like good option unless there are exponential number of possible paths between

# conceptually, if we divide each of the edges into equal weights of 1, essentially dissolves weights and allows for bfs

# dijkstra's algorithm - optimal way is to imagine wavefront, stopping at shortest segment, then add to the next_step and compare those side by side
# another way of thinking of it is to subtract the shortest segment from the longer one

# brute force implementation for hw
# adjacency list, or edge list for weighted graph

# def dijkstra(root, destination):
#   if root.val == destination:
#     return root #want function to return right or left - which path to take
#   }
#   if root.left < root.right:
#     root.left += root.val
#     return dijkstra(root.left)
#   elif root.left > root.right:
#     root.right += root.val
#     return dijkstra(root.right)
# ^ given only a two-sided tree - diamond

# [{A: [B, 2], [C, 6],
# B: [A, 2], [C, 3],
# C: [A, 6], [B, 3]
# }]

#high-level pseudocode solution

# first nodes between two paths, mark the smaller one
# for moving forward, compare the weight of next_step edge + first to the weight of the other
# push wavefront as you continue, and drop the previous one

# def dijkstra(start, end):
#     wavefront = datastructure()
#     visited = set()
#     while wavefront is not empty:
#         # previous_node is the node that we picked n as a neighbor of
#         previous_node, next_shortest_node = pick_next_shortest_node_to_visit(wavefront, visited)
#         wavefront.add(next_shortest_node)
#         update_distance_to(next_shortest_node)
#         visited.add(next_shortest_node)
#         remove_from_wavefront_if_all_nodes_explored(p)
#     return_distance_to(end)
# Heap - same form as binary tree, but only the parent node is >= or <= all children
# top to bottom traversal is always log(n) time because heaps remain balanced


class Heap:
  def pop():
    "returns the minimum element, in log(n)"
    pass
# swap with bottom right, continue swapping 
# with next smallest to get to the bottom
  def push():
    pass
# swap with next min above until 
# you cant find smaller parent node





def dijkstra(graph, origin):
  visited = {origin}
  wavefront = {origin}
  distance_to = {origin: 0} # node to distance
  while len(wavefront) > 0:
    min_node = None
    min_distance = float("inf")
    prev_node = None
    for n in wavefront:
      neighbors = get_neighbors(n)
      for neighbor in neighbors:
        if neighbor in visited:
          continue
        if distance_to[n] + edge_weight(n, neighbor) < min_distance:
          min_distance = distance_to[n] + edge_weight(n, neighbor)
          min_node = neighbor
          prev_node = n
    distance_to[min_node] = min_distance
    visited.add(min_node) 
    wavefront.add(min_node)
    possibly_remove(prev_node)
  return distance_to
  
    
      



# better to use a queue for bfs approach
#> more of a dfs approach currently
adj_graph = {
  0: {1: 1, 2: 10, 4: 50},
  1: {0: 1, 3: 12}
  2: {3: 5, 5: 11}
}

class Dijkstra:   

  def __init__(self):
    self.visited = set() #lexical scoping - no need to add to function parameters
    self.wavefront = set()

  def shortestPath(self, graph, total = 0, target):
    
    for i in graph:
      next_step = self.get_min(graph[i])

      if next_step == target:
        return total + graph[i][next_step]
      
      if self.visited.has(next_step):
        graph[i].pop(next_step)
        next_step = self.get_min(graph[i])
      
      self.wavefront.add() # 
      self.visited.add(next_step)
      self.shortestPath(graph, total + graph[i][next_step], target)
  
  #returns the key of the shortest weighted path closest from current node
  def get_min(self, obj):
    shortest = obj[0]
    for j in obj:
      if obj[j] < shortest:
        shortest = obj[j]
        key = j
    return key
















# online solution (geeksforgeeks?)

import sys

# Function to find out which of the unvisited node 
# needs to be visited next_step
def to_be_visited():
  global visited_and_distance
  v = -10
  # Choosing the vertex with the minimum distance
  for index in range(number_of_vertices):
    if visited_and_distance[index][0] == 0 \
      and (v < 0 or visited_and_distance[index][1] <= \
      visited_and_distance[v][1]):
        v = index
  return v

# Creating the graph as an adjacency matrix
vertices = [[0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 0]]
edges =  [[0, 3, 4, 0],
          [0, 0, 0.5, 0],
          [0, 0, 0, 1],
          [0, 0, 0, 0]]

number_of_vertices = len(vertices[0])

# The first element of the lists inside visited_and_distance 
# denotes if the vertex has been visited.
# The second element of the lists inside the visited_and_distance 
# denotes the distance from the source.
visited_and_distance = [[0, 0]]
for i in range(number_of_vertices-1):
  visited_and_distance.append([0, sys.maxsize])

for vertex in range(number_of_vertices):
  # Finding the next_step vertex to be visited.
  to_visit = to_be_visited()
  for neighbor_index in range(number_of_vertices):
    # Calculating the new distance for all unvisited neighbours
    # of the chosen vertex.
    if vertices[to_visit][neighbor_index] == 1 and \
     visited_and_distance[neighbor_index][0] == 0:
      new_distance = visited_and_distance[to_visit][1] \
      + edges[to_visit][neighbor_index]
      # Updating the distance of the neighbor if its current distance
      # is greater than the distance that has just been calculated
      if visited_and_distance[neighbor_index][1] > new_distance:
        visited_and_distance[neighbor_index][1] = new_distance
    # Visiting the vertex found earlier
    visited_and_distance[to_visit][0] = 1

i = 0 

# Printing out the shortest distance from the source to each vertex       
for distance in visited_and_distance:
  print("The shortest distance of ",chr(ord('a') + i),\
  " from the source vertex a is:",distance[1])
  i = i + 1
