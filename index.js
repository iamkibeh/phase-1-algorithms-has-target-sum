function hasTargetSum(array, target) {
  // Write your algorithm here
for (let i = 0; i < array.length; i++) {
  const element = target - array[i];
  for (let j = i+1; j < array.length; j++) {
    if( array[j]=== element){
      return true
    }   
  }
}
return false

}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  1. loop through the array, 
  2  for each element in an array, find a number that when added returns the target number
  3. itterate through the array and find the number.
  4. if the number exists in our array, return true, else return false
*/

/*
  Add written explanation of your solution here
  time complexity = O(n**2) since it has nested loops
  space complexity = linear complexity because in worst space scenario if the length of array is very big, youll require a large memory to store the data O(n)

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
