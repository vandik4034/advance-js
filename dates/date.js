
function setAlarmWithSound(hours, minutes, seconds) {

    let currentTime = new Date();

    let alarmTime = new Date();

    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(seconds);
    alarmTime.setMilliseconds(0);

    let timeDifference = alarmTime - currentTime;

    if (timeDifference < 0) {
        timeDifference += 24 * 60 * 60 * 1000; 
    }

    console.log(`Alarm set for ${alarmTime.toLocaleTimeString()}`);

    
    setTimeout(function() {
        
        let alarmSound = new Audio('file:///C:/Users/Admin/Downloads/mixkit-street-public-alarm-997.wav');  
        alarmSound.play(); 
        alert("ALARM! Time's up!");
    }, timeDifference);
}


setAlarmWithSound(15, 29, 0);


// more example 


let eventdate = new Date(2025, 6, 15);

let currentdate = new Date();


let timediff = eventdate - currentdate;

let dayevent = Math.floor(timediff / (1000 * 3600 *24));

console.log (`there are ${dayevent} days until left the event`)


// more example 


let date = new Date(2023, 2, 12) 

let daysofWeek = ["Sunday", "Monday", "Tuseday", "Wendsday", "Thursday", "Friday", "Saturaday"]

let dayofWeek = date.getDay();

console.log(`The specific date ${date.toDateString()} is a ${daysofWeek[dayofWeek]}.`);


// more example


let currentDate = new Date()

console.log(currentDate)

let someDate = new Date(2025, 2, 6) 

let today = new Date();


if (someDate < today) {

    console.log("the date is past")

} else if (someDate > today) {

    console.log("the date is Future") 

} else {

    console.log("date is today")
}
