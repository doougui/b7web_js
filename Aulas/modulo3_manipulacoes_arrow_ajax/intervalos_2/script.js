let timer;

function run() {
	timer = setTimeout(function() {
		document.querySelector('.demo').innerHTML = 'Rodou!';
	}, 2000);
}

function stop() {
	clearInterval(timer);
}

document.querySelector('#start').addEventListener('click', run);
document.querySelector('#stop').addEventListener('click', stop);