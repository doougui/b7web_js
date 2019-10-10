let n = 10.34234;
let string_n = '25.58434';

console.log(`TOSTRING: ${n.toString()}, TIPO: ${typeof n.toString()}`); // Transforma o número em uma string
console.log(`TOFIXED: ${n.toFixed(2)}`); // Determinada a quantidade de casas decimais
console.log(`PARSEINT: ${parseInt(string_n)}`); // Transforma uma string em um número
console.log(`PARSEFLOAT: ${parseFloat(string_n)}`); // Transforma uma string em um número flutuante

