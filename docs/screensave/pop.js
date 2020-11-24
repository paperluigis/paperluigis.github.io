speed = 60;
var constRand1 = 0 * Math.random() * 500;
var constRand2 = 0 * Math.random() * 500;
var a = 215, b = 0;
var shakeX = 1366;
var shakeY = 720;
function bounce() {
	window.moveTo(constRand1 + Math.random() * shakeX, constRand2 + Math.random() * shakeY);
    window.resizeTo(Math.random() * shakeX / 2, Math.random() * shakeX / 2);
	window.focus();
};
setInterval(bounce, 1000 / speed);