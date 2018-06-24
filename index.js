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
  let feetcalc = distanceFromHqInBlocks(block) * 264
  return feetcalc
}

function distanceTravelledInFeet(block1, block2) {
  let feettravel = (block1-block2)*264
  return feettravel
}