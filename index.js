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
  distanceFromHqInBlocks(43); 
  return block 
  let feetCalc = block*264
  return feetCalc
  
}