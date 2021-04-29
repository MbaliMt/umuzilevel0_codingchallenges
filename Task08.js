

function numberToTime(number){
    var timeInHours = Math.trunc(number/60);
    var timeInMinutes = number % 60;

    if (timeInHours == 1 && timeInMinutes == 1){
        console.log(timeInHours+" hour", timeInMinutes+" minute");
    }
    else if(timeInHours == 1 && timeInMinutes > 1 ){
        console.log(+timeInHours+" hour" ,timeInMinutes+" minutes");
    }
    else if(timeInHours > 1 && timeInMinutes == 1){
        console.log(timeInHours+" hours", timeInMinutes+" minute");
    }
    else if(timeInHours > 1 && timeInMinutes < 1){
        console.log(timeInHours+" hours", timeInMinutes+" minutes");
    }
    else if(timeInHours > 1 && timeInMinutes > 1){
        console.log(timeInHours+" hours", timeInMinutes+" minutes");
    }
    else if(timeInHours == 1 && timeInMinutes < 1){
        console.log(timeInHours+" hour", timeInMinutes+" minutes");
    }
    else if(timeInHours < 1 && timeInMinutes == 1){
        console.log(timeInHours+" hours", timeInMinutes+" minute");
    }
    else if(timeInHours < 1 && timeInMinutes < 1){
        console.log(timeInHours+" hours", timeInMinutes+" minutes");
    }
        
 }
numberToTime(121);