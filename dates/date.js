// Function to set an alarm with a sound
function setAlarmWithSound(hours, minutes, seconds) {
    let currentTime = new Date();
    let alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(seconds);
    alarmTime.setMilliseconds(0);  // Set milliseconds to 0

    let timeDifference = alarmTime - currentTime;

    if (timeDifference < 0) {
        timeDifference += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds
    }

    console.log(`Alarm set for ${alarmTime.toLocaleTimeString()}`);

    // Set the timeout to trigger the alarm
    setTimeout(function() {
        // Create an audio element to play a sound
        let alarmSound = new Audio('https://www.soundjay.com/button/beep-07.wav');  // You can use any sound URL
        alarmSound.play(); // Play the sound when the alarm goes off
        alert("ALARM! Time's up!");
    }, timeDifference);
}

// Set an alarm for 12:30 PM
setAlarmWithSound(15, 14, 0);
