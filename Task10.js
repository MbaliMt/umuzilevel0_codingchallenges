
function myString(word1, word2){
    for (let x = 0; x < word1.length; x++){  
        for (let n = 0; n < word2.length; n++){
            if (word1[x] == word2[n]){
                process.stdout.write(word2[n]);
            }
        }    
    }console.log();          
}
myString("house", "computers");



