let startTime;
document.getElementById('userInput').addEventListener('focus', () => {
startTime = new Date().getTime();
});
function calculateSpeed() {
const endTime = new Date().getTime();
const timeTaken = (endTime - startTime) / 1000;
const originalText = document.getElementById('textToType').innerText;
const userText = document.getElementById('userInput').value;
const wordCount = originalText.split(' ').length;
const typingSpeed = Math.round((wordCount / timeTaken) * 60);
const resultDiv = document.getElementById('result');
if (userText === originalText) {
resultDiv.innerHTML = `Your typing speed is <strong>${typingSpeed} WPM</strong>.`;
} else {
resultDiv.innerHTML = `Text does not match. Please try again.`;
}
}
