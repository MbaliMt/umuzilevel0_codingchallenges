var myList = [];
var temp;
function findMax(num1, num2, num3){
    myList.push(num1);
    myList.push(num2);
    myList.push(num3);
    for (i = 0; i < myList.length; i++){
        for (j = i; j < myList.length; j++){
            if (myList[i] > myList[j]){
                temp = myList[i];
                myList[i] = myList[j];
                myList[j] = temp;
            }    
        }        
    }            
    return myList[myList.length -1 ];
}
console.log("The maximum number is:", findMax(720,90, 187));