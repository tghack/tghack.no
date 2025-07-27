let countdownEl = document.getElementById("countdown");
countdownEl.className += " enabled";

const locale = document.getElementsByTagName("html")[0].lang;

const lang = {
    "nb-NO": {
        "live": "CTFen er live NÅ",
        "day": "dag",
        "day_article": "er",
    },
    "en": {
        "live": "The CTFen is live NOW",
        "day": "dag",
        "day_article": "er",
    },
}

const targetDate = new Date('2026-04-01T19:00:00').getTime();
const customMessage = `${lang[locale].live} @ <a color="white" href="https://ctf.tghack.no/">ctf.tghack.no</a>`;

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        countdownEl.innerText = customMessage;
    } else {
        let text = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (days > 0) {
            const article = days == 1 ? "" : lang[locale].day_article;
            text = `${days} ${lang[locale].day}{article}, ${text}`;
        }

        countdownEl.innerText = text;
    }
}

updateTimer();
const countdownTimer = setInterval(updateTimer, 1000);
