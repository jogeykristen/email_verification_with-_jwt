var missingNumber = (arr) => {
  var missing = [];
  console.log("Arr = ", arr);
  for (
    let x = 0, y = x + 1;
    x <= arr.length - 2 && y <= arr.length - 1;
    x++, y++
  ) {
    var expected = arr[x];
    console.log("ecpected = ", expected);
    console.log("x = ", arr[x], "y = ", arr[y]);
    var difference = arr[y] - arr[x];
    console.log("difference = ", difference);
    if (difference > 1) {
      var index = arr.indexOf(arr[x]);
      console.log("index = ", index);

      expected += 1;
      console.log("expected ++ = ", expected);
      arr.splice(index + 1, 0, expected);
      //missing.push(expected);
    }
  }
  //   arr = arr.concat(missing);
  //   arr.sort();
  console.log("Arr = ", arr);
};

var arr = [11, 13, 15, 16, 17];
missingNumber(arr);
