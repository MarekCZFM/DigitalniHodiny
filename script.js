function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursProgress = hours / 24 * 283;
    const minutesProgress = minutes / 60 * 283;
    const secondsProgress = seconds / 60 * 283;

    document.getElementById('hours-progress').style.strokeDashoffset = 283 - hoursProgress;
    document.getElementById('minutes-progress').style.strokeDashoffset = 283 - minutesProgress;
    document.getElementById('seconds-progress').style.strokeDashoffset = 283 - secondsProgress;

    document.getElementById('hours-text').innerText = hours;
    document.getElementById('minutes-text').innerText = minutes;
    document.getElementById('seconds-text').innerText = seconds;
}

setInterval(updateClock, 1000);
updateClock();