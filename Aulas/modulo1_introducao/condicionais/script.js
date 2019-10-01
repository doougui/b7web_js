var hora = 18;

// Else if
if (hora < 12) {
	console.log("Bom dia!");
} else if (hora < 18) {
	console.log("Boa tarde!");
} else if (hora <= 23) {
	console.log("Boa noite!");
}

// Operador &&
if (hora >= 12 && hora < 18) {
	console.log("Boa tarde!");
}

// Operador ||
if (hora == 12 || hora == 18) {
	console.log('Você está na hora do rush!');
}