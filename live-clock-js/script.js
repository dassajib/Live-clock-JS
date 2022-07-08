function digitalClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let timeFormat = 'AM';

    if(hour === 0) {
        hour = 12;
    }
    
    if(hour > 12) {
        hour = hour -12;
        timeFormat = "PM";
    }

    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }

    let actualTime = `${hour}:${minute}:${second}`;
    document.querySelector('#time').innerText = actualTime;
    document.querySelector('small').innerText = timeFormat;

    setInterval (digitalClock,1000);
}

digitalClock();