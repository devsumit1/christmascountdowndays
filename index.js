const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    
    // Task:
    // - Get today's date (you only need the day).
    let todayDate = new Date();
    document.getElementById("countdown-display").innerHTML = todayDate.getDate();
    // - Calculate remaining days.
    let christmasYear = todayDate.getFullYear();
    if (todayDate.getMonth() == 11 && todayDate.getDate() > 25) {
            christmasYear = christmasYear + 1;
	}
    let christmasDate =
		new Date(christmasYear, 11, 25);
    let dayMilliseconds =
		1000 * 60 * 60 * 24;
    
    let remainingDays = Math.ceil((christmasDate.getDate() - todayDate.getDate()))
    // - Display remaining days in countdownDisplay.
    document.querySelector(".countdown-text").innerText =" Days til Christmas!" + " - " + remainingDays
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
let todayDate = new Date();
document.querySelector(".countdown-hours").innerText = "Hours Left" + " - " + todayDate.getHours();
document.querySelector(".countdown-min").innerText = "Minutes Left" + " - " + todayDate.getMinutes();
document.querySelector(".countdown-sec").innerText = "Seconds Left" + " - " +  todayDate.getSeconds();
// - Add a countdown for another festival, your birthday, or Christmas 2022.