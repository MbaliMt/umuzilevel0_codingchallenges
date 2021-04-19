function celsiusToFara(celcsius){
    var fara = (celcsius * 9/5) + 32;
    return fara;

}
function faraToCelsius(fara1){
    var celsius1 = (fara1 -32) * 5/9;
    return celsius1;
}

console.log(celsiusToFara(38));
console.log(faraToCelsius(100.4))