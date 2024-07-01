const inputArray = [0, 1, 0, 3, 12];
const outputArray = [];
const zeroArray = [];

for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] === 0) {
    console.log("zero == ", inputArray[i]);
    zeroArray.push(0);
  } else {
    console.log("non zero == ", inputArray[i]);
    outputArray.push(inputArray[i]);
  }
}
console.log("output array == ", [...outputArray, ...zeroArray]);
for (let i = 0; i < zeroArray.length; i++) {
  outputArray.push(0);
}

console.log(outputArray);
