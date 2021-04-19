

function numberToTime(number){
    var timeInHours = number/60;
    var realTimeInNumbers = Math.trunc(timeInHours);
    var timeInMinutes = realTimeInNumbers * 60;
    var varrealTimeInMinutes = number - timeInMinutes;
    console.log("The time is " +realTimeInNumbers +" hour(s) " +varrealTimeInMinutes+" minutes");

    
}
numberToTime(133);