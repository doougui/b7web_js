// Forma antiga
let motos = new Array('CG', 'Suzuki', 'Biz');

// Forma atual
let carros = [
	'Palio', 
	'Corsa', 
	'HB20', 
	'Onix',
	// Funções dentro de arrays
	function() {
		console.log('Celta');
	}
];

carros[4]();

let ingredientes = [
	// Arrays dentro de arrays
	['Uva', 'Pera', 'Maçã'],
	['Arroz', 'Macarrão']
];

console.log(ingredientes[0][2]);