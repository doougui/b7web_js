let lista = [
	{id: 1, nome: 'Douglas', sobrenome: 'Pinheiro Goulart'},
	{id: 2, nome: 'Paulo', sobrenome: 'da Silva'},
	{id: 3, nome: 'João', sobrenome: 'Almeida Pinto'}
];

// Find
let pessoa = lista.find(function(item) {
	return (item.sobrenome == 'Almeida Pinto') ? true : false;
});

console.log('FIND:');
console.log(pessoa);

// FindIndex
pessoa = lista.findIndex(function(item) {
	return (item.sobrenome == 'Almeida Pinto') ? true : false;
});

console.log('FINDINDEX:');
console.log(pessoa);