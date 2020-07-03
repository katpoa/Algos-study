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

#wavefront = datastructure()
# while wavefront is not empty:
#   # p is the node that we picked neighbor n from
#   previous, n = pick_next_step_shortest_node_path(wavefront)
#   wavefront.add(n)
#   visited.add(n)
#   remove_from_wavefront_if_all_nodes_explored(previous)
# return_distance_to(end)

adj_graph = {
  0: {1: 1, 2: 10, 4: 50},
  1: {0: 1, 3: 12}
  2: {3: 5, 5: 11}
}

class Dijkstra:
  wavefront = set()

  def shortestPath(self, wavefront, graph, total = 0, end):
    
    for i in graph:
      next_step = get_min(graph[i])

      if next_step == end:
        return total + graph[i][next_step]
      
      if wavefront.has(next_step):
        graph[i].pop(next_step)
        next_step = get_min(graph[i])
      
      wavefront.add(next_step)
      self.shortestPath(wavefront, graph, total + graph[i][next_step], end)
  
  #returns the key of the shortest weighted path closest from current node
  def get_min(obj):
    shortest = obj[0]
    for j in obj:
      if obj[j] < shortest:
        shortest = obj[j]
        key = j
    return key
