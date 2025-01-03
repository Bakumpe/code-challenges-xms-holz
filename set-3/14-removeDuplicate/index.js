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