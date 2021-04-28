

function numberToTime(number){
    var timeInHours = Math.trunc(number/60);
    var timeInMinutes = number % 60;

    if (timeInHours == 1 && timeInMinutes == 1){
        console.log(timeInHours, timeInMinutes);
    }
    else if(timeInHours == 1 && timeInMinutes > 1 ){
        console.log(+timeInHours ,timeInMinutes);
    }
    else if(timeInHours > 1 && timeInMinutes == 1){
        console.log(timeInHours, timeInMinutes);
    }
    else if(timeInHours > 1 && timeInMinutes < 1){
        console.log(timeInHours, timeInMinutes);
    }
    else if(timeInHours > 1 && timeInMinutes > 1){
        console.log(timeInHours, timeInMinutes);
    }
    else if(timeInHours == 1 && timeInMinutes <= 1){
        console.log(timeInHours, timeInMinutes);
    }
    else if(timeInHours <= 1 && timeInMinutes >= 1){
        console.log(timeInHours, timeInMinutes);
    }
    else if(timeInHours <= 1 && timeInMinutes <= 1){
        console.log(timeInHours, timeInMinutes);
    }
        
 }
numberToTime(120);