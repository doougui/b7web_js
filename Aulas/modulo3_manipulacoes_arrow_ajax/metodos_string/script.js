let nome = "Douglas Pinheiro Goulart";

console.log('LENGTH: ' + nome.length); // Retorna o tamanho da string (conta espaços)
console.log('INDEXOF: ' + nome.indexOf('Pinheiro')); // Retorna em que posição (ínicio) o elemento se encontra na string. Se não encontrar, retorna -1. Ex: 'Pinheiro' retorna 8
console.log('SLICE: ' + nome.slice(8)); // Pega um pedaço da string com o começo especificado pelo primeiro parâmetro indo [ até um outro ponto especificado pelo segundo parâmetro ]. Se não for passado um segundo parâmetro vai até o final da string original
console.log('SUBSTRING: ' + nome.substring(8, 10)); // Pega um pedaço da string com o começo especificado pelo primeiro parâmetro indo [ até um outro ponto especificado pelo segundo parâmetro ]. Se não for passado um segundo parâmetro vai até o final da string original
console.log('SUBSTR: ' + nome.substr(-4)); // Pega um pedaço da string com o começo especificado pelo primeiro parâmetro indo [ até A QUANTIDADE DE CARACTERES A PARTIR DA POSIÇÃO INICIAL ]. Se não for passado um segundo parâmetro vai até o final da string original
console.log('REPLACE: ' + nome.replace('Pinheiro', 'Sequoia')); // Subtitui uma string. Primeiro parâmetro: pesquisa. Segundo parâmetro: valor que vai substituir a pesquisa
console.log('TOUPPERCASE: ' + nome.toUpperCase()); // Transforma a string toda em maiúscula
console.log('TOLOWERCASE: ' + nome.toLowerCase()); // Transforma a string toda em minúscula
console.log('TRIM: ' + nome.trim()); // Remove os espaços em branco no começo e no final da string
console.log('CHARAT: ' + nome.charAt(3)); // Retorna o caractere localizado na posição especificada
console.log('SPLIT: ' + nome.split(' ')); // Divide uma string em strings (retorna um array com estas string). Equivalente ao explode no PHP.
