    
function myString(word){
    var vowels = ['a','e','i','o','u', 'A','E','I', 'O','U'];
    newLetters = [];
    for (let x = 0; x < word.length; x++){ 
        for (let n = 0; n < vowels.length; n++){     
            if (word[x].toLowerCase() == vowels[n]){
                newLetters.push(vowels[n])

            }
        }   
    }
    const unique = [...new Set([...newLetters])].join('');
    console.log(unique);
    console.log();              
}
myString("Umuzi");