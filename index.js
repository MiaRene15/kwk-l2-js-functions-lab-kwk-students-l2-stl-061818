// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    let calc = block - 42
    return calc 
  } else if  (block < 42) {
    let calc = 42 - block
    return calc 
  } 

}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block);
  let feetcalc = block*264
  return feetcalc
  
}