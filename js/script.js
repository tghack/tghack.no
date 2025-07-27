let countdownEl = document.getElementById("countdown");
countdownEl.className += " enabled";

const targetDate = new Date('2026-04-01T19:00:00').getTime();
const customMessage = `CTF'en er LIVE nå @ <a color="white" href="https://ctf.tghack.no/">ctf.tghack.no</a>`;

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        countdownEl.innerText = customMessage;
    } else {
        countdownEl.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}, 1000);
