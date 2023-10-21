import "./style.css"

function nextInLine(arr, item) {
    // Only change code below this line
    let removedItem = arr[0]
    arr.push(item);
    arr.shift();
    return removedItem
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));