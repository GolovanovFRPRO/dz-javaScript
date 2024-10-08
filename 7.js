let arr = [1, 2, 3, 4, 5, 6, 0, null, 'a', 8, 9];
let counts = arr.reduce((acc, element) => {
  if (typeof element === 'number') {
    if (element === 0) {
      acc.zeroCount++;
    } else if (element % 2 === 0) {
      acc.evenCount++;
    } else {
      acc.oddCount++;
    }
  }
  return acc;
}, { evenCount: 0, oddCount: 0, zeroCount: 0 });

console.log(`Even elements: ${counts.evenCount}`);
console.log(`Odd elements: ${counts.oddCount}`);
console.log(`Zero elements: ${counts.zeroCount}`);