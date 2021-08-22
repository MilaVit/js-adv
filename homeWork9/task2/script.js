function countingValleys(numCount, steps) {
  let elevation = 0,
  valleys = 0;
  for (let i = 0; i < numCount; i+=1) {
    if (steps[i] === "U") {
      elevation++;
      if (elevation === 0 && steps[i] === 'U' || steps[i] === 'D') {
        valleys++;
      }
    } else {
      elevation--;
    }
  }
  return valleys;
}

console.log(countingValleys(8,'UDDDUDUU'));