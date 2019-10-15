function adicionar(nomes, ...novosNomes) {
	return [...nomes, ...novosNomes];
}

let nomes = ['Douglas', 'Paulo'];
let outros = adicionar(nomes, 'José', 'Salomão', 'Bonieky', 'Maria');

console.log(outros);