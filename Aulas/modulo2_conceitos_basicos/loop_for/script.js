// LOOP FOR
let texto = '';

for (let i = 0; i < 50; i++) {
	texto = texto + i + ', ';
}

document.querySelector('#for').innerHTML = texto;

// LOOP FOR ARRAY

let carros = ['Ferrari', 'Fusca', 'Pálio', 'Corolla', 'Lamborghini'];
let html = '<ul>';

for (let i in carros) {
	html += '<li>' + carros[i] + '</li>';
}

html += '</ul>';

document.querySelector('#forarray').innerHTML = html;

