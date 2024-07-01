var missingNumber = (arr) => {
  console.log("array = ", arr);
  var sum1 = 0;
  var sum2 = 0;
  var first = arr[0];
  var check = arr.length - 1;
  var last = arr[check];
  console.log("first = ", first, "last = ", last);
  var newArray = [];
  for (let x = first; x <= last; x++) {
    newArray.push(x);
    sum1 += x;
  }
  for (y of arr) {
    sum2 += y;
  }
  console.log("newArray = ", newArray);
  var difference = sum1 - sum2;
  console.log("difference = ", sum1 - sum2);
  var index = arr.indexOf(difference - 1);
  console.log("index = ", index);
  arr.splice(index + 1, 0, difference);
  console.log("Arr === ", arr);
};
var arr = [10, 11, 12, 13, 15, 16, 17, 18];

missingNumber(arr);
