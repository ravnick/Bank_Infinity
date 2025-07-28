
function format(num) {
    return num < 10 ? "0" + num : num;
}

function watch() {
    const time = new Date();
    const year = time.getFullYear();
    const monthIndex = time.getMonth(); // 0-11
    const day = time.getDate();
    hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    ampm = hours < 12 ? "am" : "pm"

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return innerText = " " +
        day + " " +
        months[monthIndex] + " " +
        year + "  " + " Time (" +
        format(hours) + ":" +
        format(minutes) + ":" +
        format(seconds) + " " + ampm + ")";
};