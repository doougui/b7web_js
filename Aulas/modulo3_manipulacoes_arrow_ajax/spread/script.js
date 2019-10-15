let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8];

let info = {
	nome: 'Douglas',
	sobrenome: 'Pinheiro Goulart',
	idade: 17
};

let novasInfos = {
	...info,
	cidade: 'Jaguaruna',
	estado: 'Santa Catarina',
	pais: 'Brasil'
}

function adicionarInfo(info) {
	let infos = {
		...info,
		status: 0,
		token: '23482342341413',
		date: '05/05/2005'
	}

	return infos;
}

console.log(adicionarInfo({nome: 'Douglas', sobrenome: 'Pinheiro Goulart'}));