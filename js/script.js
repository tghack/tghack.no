// Set your target date and time here
const targetDate = new Date('2025-04-16T18:00:00').getTime();
// Set your custom message here
const customMessage = "CTF'en er LIVE nå @ https://ctf.tghack.no";

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").innerHTML = customMessage;
        document.getElementById("message").style.display = "block";
    }
}, 1000);