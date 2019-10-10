let lista = [
	'Ovo',
	'Farinha',
	'Corante',
	'Massa'
];

console.log(`TOSTRING: ${lista.toString()}`); // Transforma o array em uma string colocando uma virgula entre um item e outro
console.log(`JOIN: ${lista.join(' | ')}`); // Transforma o array em uma string separando os itens pelo delimitador escolhido
console.log(`INDEXOF: ${lista.indexOf('Corante')}`); // Traz a posição em que se encontra o item no array

lista.pop(); // Remove o último item do array
lista.shift(); // Remove o primeiro item do array
lista.unshift('Liquidificador'); // Adiciona itens no inicio do array
lista.push('Cobertura'); // Adiciona um novo item no array
lista.slice(1, 1); // Remove um ou vários itens de um array. Primeiro parâmetro: primeiro item. Segundo parâmetro: quantidade de itens a serem removidos
lista[0] = 'Ovos'; // Troca o valor do indice indicado. Se colocar um indice que não existe, o item será criado
lista.sort(); // Ordena o array em ordem alfábetica
lista.reverse(); // Inverte o array (geralmente usado após o sort para ordenar de forma decrescente)

console.log(lista);

// Bad practices
delete lista[1]; // Remove um item do array, mantendo o slot do array e o colocando como vazio. Resultado: (4) [1: "Ovos", 2: empty, 3: "Cobertura", 4: "Canela"] (http://prntscr.com/phkucc)
lista[lista.length] = 'Canela'; // Adiciona um novo item no array (método não recomendado)

let lista2 = [
	'Prato',
	'Liquidificador',
	'Forno'
];

console.log(`CONCAT: ${lista.concat(lista2)}`); // Junta dois arrays (neste caso irá juntar em uma string única pois a concatenação está sendo feito dentro de uma string)
