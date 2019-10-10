let nome = 'Douglas';
let idade = 17;
let frase;

// Pré-ES6

frase = 'Meu nome é ' + nome + ', eu tenho ' + idade + ' anos e ano que vem eu farei ' + (idade + 1) + ' anos.';
console.log(frase);

// Pós-ES6

frase = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem eu farei ${idade + 1} anos.`;
console.log(frase);
