var vowels = ['a','e','i','o','u'];
function myString(word){
    for (let x = 0; x < word.length; x++){  
        for (let n = 0; n < vowels.length; n++){
            if (word[x] == vowels[n]){
                process.stdout.write(vowels[n])
            }
        }    
    }console.log();              
}
myString("Umuzi".toLowerCase())




