var fib = (num) => {
  var arr = [];
  if (arr.length == 0) {
    arr = [1, 1];
  }
  console.log("arr = ", arr);

  for (x = 0; arr.length <= num - 1; x++) {
    console.log("x = ", arr[x], "y = ", arr[x + 1]);
    var sum = arr[x] + arr[x + 1];
    arr.push(sum);
  }
  console.log("arr = ", arr);
};

fib(10);
