let timer;

function start() {
	timer = setInterval(showTime, 1000);
}

function stop() {
	document.querySelector('.demo').innerHTML = '';
	clearInterval(timer);
}

function showTime() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let dateString = `${hours}:${minutes}:${seconds}`;

	document.querySelector('.demo').innerHTML = dateString;
}

document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);