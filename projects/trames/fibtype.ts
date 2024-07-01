var fib = (num: any) => {
  console.log("num = ", num);
  var char = [0, 1];
  var sum: number = 0;
  for (let i = 1; i <= num - 2; i++) {
    console.log("1st = ", char[i], "2nd = ", char[i - 1]);
    sum = char[i] + char[i - 1];
    console.log("sum = ", sum);
    char.push(sum);
  }
  console.log("char = ", char);
};
fib(10);
