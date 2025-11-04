

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');

    const timeString = `${hours}:${minutes}`;

    document.querySelector('.time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();