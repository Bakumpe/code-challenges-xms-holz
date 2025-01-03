function frequency(){
    let str = 'Hello';
    let freq = {};
    for(let i=0; i<str.length; i++){
        if(freq[str[i]]){
            freq[str[i]]++;
        }else{
            freq[str[i]] = 1;
        }
    }
    console.log(freq);
}
frequency();