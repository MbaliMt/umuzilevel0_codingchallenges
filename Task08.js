
function numberToTime(number){
    var timeInHours = Math.trunc(number/60);
    var timeInMinutes = number % 60;
    let hour = "hour";
    let minute = "minute";

    if(timeInHours > 1 || timeInHours == 0){
      hour += "s";
    }
    if(timeInMinutes > 1 || timeInMinutes == 0){
      minute += "s";
    } 
    console.log(timeInHours+" "+hour+ " "+timeInMinutes+" "+  minute);
}

numberToTime(0);


