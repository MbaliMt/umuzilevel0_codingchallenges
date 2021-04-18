
function celsiusToFara(){
    var celcsius = float(prompt("Enter celsius\n"));
    var fara = float((celcsius * 9/5) + 32);
    return round(fara);
}

function faraToCelsius(){
    var fara1 = float(prompt("Enter Fahrenheit\n"));
    var celsius1 = float((fara1 -32) * 5/9);
    return round(celsius1);
}

console.log(celsiusToFara());
console.log(faraToCelsius)();