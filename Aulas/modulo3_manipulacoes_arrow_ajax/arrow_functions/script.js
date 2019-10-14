// Forma 1
function somar(x, y) {
	return x + y;
}
console.log(somar(10, 5)); 

// Forma 2
let subtrair = function(x, y) {
	return x - y;
}
console.log(subtrair(10, 5));

// Forma 3
const multiplicar = (x, y) => {
	return x * y;
}
console.log(multiplicar(10, 5));

// Forma 4
const dividir = (x, y) => x / y;
console.log(dividir(10, 5));

// Forma 5
const tamanhoNome = nome => nome.length;
console.log(tamanhoNome('Douglas'));

// Forma 6
const semParametros = _ => 'Função sem parâmetros';
console.log(semParametros());
