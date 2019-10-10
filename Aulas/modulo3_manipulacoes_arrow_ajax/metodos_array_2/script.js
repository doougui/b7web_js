let lista = [
	45,
	4,
	9,
	16,
	25
];
let lista2 = [];

// Foreach
for (let i in lista) {
	lista2.push(lista[i] * 2);
}

// Map
lista2 = lista.map(function(item) { // Realiza a função para cada item do array
	return item * 2;
});

console.log('MAP:');
console.log(lista2);

// Filter
lista2 = lista.filter(function(item) { // Passando por cada item, se a condição for satisfeita e retornar true, adiciona o item em um novo array
	return (item > 20) ? true : false;
});

console.log('FILTER:');
console.log(lista2);

// Every
lista2 = lista.every(function(item) { // Se todos os itens satisfazerem a condição, retorna true
	return (item > 20) ? true : false;
});

console.log('EVERY:');
console.log(lista2);

// Some
lista2 = lista.some(function(item) { // Se pelo menos um item satisfazer a condição, retorna true
	return (item > 20) ? true : false;
});

console.log('SOME:');
console.log(lista2);