/*
Sort through list/linked lists of numbers
Only use supported operations and any implemented on top of supported - start from scratch, define helper methods using support operations
Then determine time complexity for each (around O(n**2))?
*/

// 1) Sort List - use lookup by index, modify at index, delete/add from end

function sortList(list) {
  var count = 0; //1
  while (count < list.length) { //n
    for (var n = 0; n < list.length; n++) { //2n + 1
      if (list[n] > list[n + 1]) {
        var next = list[n + 1]; //1
        list[n + 1] = list[n]; //1
        list[n] = next; //1
      }
    }
    count++; //n
  }
  return list; //1
}

//O(n) = n**2
var unsorted = [4, 2, 1, 5, 3];
console.log(sortList(unsorted));

function sortLinkedList(list) {
  var count = 0; //1
  while (count < list.length) { //n
    for (var m = 0; m < list.length; m++) { //2n**2 + 1
      if (list[m] > list[m + 1]) {
        var next = list[m + 1]; //1
        list[m + 1] = list[m]; //1
        list[m] = next; //1
      }
    }
    count++; //n
  }
  return list; //1
}

// O(n) = n**3
console.log(sortLinkedList(unsorted));
