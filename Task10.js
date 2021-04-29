
function myString(word1, word2){
    var newWord = [];
    var wow;
    for (let x = 0; x < word1.length; x++){  
        for (let n = 0; n < word2.length; n++){
            if (word1[x] == word2[n]){
                newWord.push(" "+ word2[n]);               
            }
        }    
    }   
    newWord = newWord.toString().split(",")
    console.log("Common letters:"+newWord.toString());
    }
myString("house", "computers");



