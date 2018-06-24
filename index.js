// Code your solution in this file!

//function distanceFromHqInBlocks(block) {
// let calc = block - 42 
// return calc
// }

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    let calc = block - 42
  } else if (block < 42) {
    let calc = 42 - block
  } 
  
  return calc 
}