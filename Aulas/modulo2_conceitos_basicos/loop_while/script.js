// LOOP WHILE
let html = '';

let count = 0;

while (count < 10) {
	html += 'Número: ' + count + '<br>';
	count++;
}

document.querySelector('#while').innerHTML = html;