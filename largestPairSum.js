function largestPairSum (numbers) {
  let list = numbers.sort(function(a,b){ return a-b; })
  return list[list.length -1] + list[list.length-2]
}
