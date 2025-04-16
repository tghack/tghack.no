
const targetDate = new Date('2025-04-16T19:00:00').getTime();
const customMessage = "CTF'en er LIVE nå @ https://ctf.tghack.no";                                                                                                                                           // TG25{7juvst4rter}


const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").innerHTML = customMessage;
        document.getElementById("message").style.display = "block";
    }
}, 1000);