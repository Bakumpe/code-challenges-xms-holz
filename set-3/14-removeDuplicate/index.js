/**
 *  Create a function that removes duplicate values from an array.
Example input: [1, 2, 2, 3]. Output: [1, 2, 3].
 
start program

1. Create a function named removeDuplicates.
2. Initialize an array with duplicate values.
3. Initialize an empty array named uniqueArr.
4. Loop through the array.
5. Check if the current value is not in the uniqueArr.
6. If it is not in the uniqueArr, add it to the uniqueArr.
7. Print the uniqueArr.
8. End program

 */

function removeDuplicates(){
    let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
    let uniqueArr = [];

    for(let i = 0; i < arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i]);
        }
    }
    console.log(uniqueArr);
}
removeDuplicates(); // [1, 2, 3, 4, 5, 6, 7]