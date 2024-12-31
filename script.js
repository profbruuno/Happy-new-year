// Countdown Timer Script
document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date('2025-01-01T00:00:00+03:00'); // 12:00 AM EAT

    function updateCountdown(timerId) {
        const countdownTimer = document.getElementById(timerId);
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const milliseconds = Math.floor((distance % 1000) / 10);

            countdownTimer.innerHTML = `
                <span>${days}d </span>
                <span>${hours}h </span>
                <span>${minutes}m </span>
                <span>${seconds}s </span>
                <span>${milliseconds}ms</span>
            `;

            if (distance < 0) {
                clearInterval(timer);
                countdownTimer.innerHTML = "Congratulations upon reaching 2025!";
            }
        }, 10);
    }

    updateCountdown('top-timer');
    updateCountdown('bottom-timer');
});
