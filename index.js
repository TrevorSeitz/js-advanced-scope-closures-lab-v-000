function produceDrivingRange(range) {
  return function(start, end) {
    const dist =  Math.abs(parseInt(end) - parseInt(start))
    // if (dist  > range) {
    //   return `${dist - range} blocks out of range`
    // else
    //   return `within range by ${range - dist}`
    // }
    return dist > range ? `${dist - range} blocks out of range` : `within range by ${range - dist}`
  }
}


function produceTipCalculator(multiplier) {
  return function (fare) {
    return fare * multiplier
  }
}
