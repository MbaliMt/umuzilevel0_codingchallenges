

function numberToTime(number){
    var timeInHours = Math.trunc(number/60);
    var timeInMinutes = number % 60;

    if (timeInHours == 1 && timeInMinutes == 1){
        console.log("The time is " +timeInHours +" hour " +timeInMinutes+" minute");
    }
    else if(timeInHours == 1 && timeInMinutes > 1 ){
        console.log("The time is " +timeInHours +" hour " +timeInMinutes+" minutes");
    }
    else if(timeInHours > 1 && timeInMinutes == 1){
        console.log("The time is " +timeInHours +" hours " +timeInMinutes+" minute");
    }
    else if(timeInHours > 1 && timeInMinutes > 1){
        console.log("The time is " +timeInHours +" hours " +timeInMinutes+" minutes");
    }
    
 }
numberToTime(63);