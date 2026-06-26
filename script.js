const REGISTERED_LEGENDS = 0;
const MAX_LEGENDS = 32;

// غيّر التاريخ ده لما تحدد ميعاد البطولة الحقيقي
const TOURNAMENT_DATE = new Date("2026-08-01T20:00:00+03:00").getTime();

function updateProgress() {
  const registeredText = document.getElementById("registeredText");
  const progressFill = document.getElementById("progressFill");
  const percent = Math.min((REGISTERED_LEGENDS / MAX_LEGENDS) * 100, 100);
  registeredText.textContent = `${REGISTERED_LEGENDS} / ${MAX_LEGENDS}`;
  progressFill.style.width = `${percent}%`;
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = TOURNAMENT_DATE - now;

  if (distance <= 0) {
    document.querySelector(".time-grid").innerHTML = "<div><strong>بدأت</strong><span>البطولة</span></div>";
    return;
  }

  document.getElementById("days").textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
  document.getElementById("hours").textContent = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
  document.getElementById("seconds").textContent = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
}

updateProgress();
updateCountdown();
setInterval(updateCountdown, 1000);
