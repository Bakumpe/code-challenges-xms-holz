function capitalize() {
    let words = prompt("Enter words: ");
    let wordArray = words.split(" ");
    let capitalizedWords = [];
    
    for(let i = 0; i < wordArray.length; i++){
        let word = wordArray[i];
        let firstLetter = word.charAt(0).toUpperCase();
        let restOfWord = word.slice(1);
        let capitalizedWord = firstLetter + restOfWord;
        capitalizedWords.push(capitalizedWord);
    }
    console.log(capitalizedWords.join(" "));
}   
capitalize();