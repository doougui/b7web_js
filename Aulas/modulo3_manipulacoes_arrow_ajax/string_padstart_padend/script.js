let telefone = '53242';

console.log( telefone.padEnd(9, '*') );
console.log( telefone.padStart(9, '*') );

let cartao = '1234123412341234';
let lastDigits = cartao.slice(-4);

let maskedCard = lastDigits.padStart(16, '*');

console.log(`Este é o seu cartão? ${maskedCard}`)

