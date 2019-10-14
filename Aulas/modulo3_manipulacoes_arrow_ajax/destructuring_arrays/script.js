let info = [
	'Douglas Pinheiro Goulart',
	'Douglas',
	'Pinheiro Goulart',
	'@oDougui'
];

let [nomeCompleto, , , twitter] = info;

console.log(nomeCompleto, twitter);

let [nome, sobrenome, idade = 17] = ['Douglas', 'Goulart'];

console.log(nome, sobrenome, idade);

function create() {
	return [1, 2, 3];
}

let [a, b, c] = create();

console.log(a, b, c);