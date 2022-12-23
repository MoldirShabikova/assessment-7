
const addToZero = (nums) => {
    let value = false;
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          if (nums[i] + nums[j] === 0) {
            value = true;
          }
        }
      }
    }
return value
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True