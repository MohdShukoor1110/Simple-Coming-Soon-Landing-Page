let countDownDate = new Date("Dec 31, 2026 00:00:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
    document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
    document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
    document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    };
},1000);