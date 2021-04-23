    
function myString(word){
    var vowels = ['a','e','i','o','u', 'A','E','I', 'O','U'];
    
    for (let x = 0; x < word.length; x++){ 
        for (let n = 0; n < vowels.length; n++){     
            if (word[x] == vowels[n]){
                process.stdout.write(vowels[n].toLowerCase()); 
            }
        }    
    }console.log();              
}
myString("Umuzi");




