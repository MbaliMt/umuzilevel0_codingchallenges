

function numberToTime(number){
    var timeInHours = number/60;
    var realTimeInNumbers = math.trunc(timeInHours);
    var timeInMinutes = realTimeInNumbers * 60;
    var varrealTimeInMinutes = number - timeInMinutes;
    print("The time is" +realTimeInNumbers +"hours" +timeInMinutes+"minutes");

    print(numberToTime(71))
}
console.log(numberToTime(71));