/***
 * Create a program that combines two arrays [1, 2] and [3, 4] into one
using the concat() method.

start program
create a function called combine
  create a variable called arr1 and assign it an array of [1, 2]
  create a variable called arr2 and assign it an array of [3, 4]
  create a variable called combined and assign it the value of arr1.concat(arr2)
  output the value of combined
end program
 */

function combine() {
  let arr1 = [1, 2,];
  let arr2 = [3, 4,];

  let combined = arr1.concat(arr2);

  console.log(combined);
}
combine();