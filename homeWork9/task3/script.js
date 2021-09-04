function numberJumps(numCount, cloudy) {
    let count = 0;
    for(let i=0; i < numCount;i+=1) {
      if(cloudy[i] === 1) {
          i+=2
          count+=1
      } else {
          i+1
          count+=1
      }
    }
    return console.log(count)
}

numberJumps(7,[0,0,1,0,0,1,0])