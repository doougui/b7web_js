// VAR - Faz com que uma variável seja acessada globalmente.
function variable() {
	var nome = "Douglas";
	console.log("VAR: " + window.nome);

	if (nome == "Douglas") {
		var idade = 17;
	}

	console.log("VAR: " + idade); // Retorna 17

	// VAR PERMITE que a variável seja re-declarada
	var nome = "Pedro";
	console.log("VAR: " + nome);
}


// LET - Faz com que a variável seja acessada localmente.
function let() {
	let fruta = "Banana";

	if (fruta == "Banana") {
		let sabor = "Bom";
	}

	console.log("LET: " + sabor); // Retorna "sabor is not defined"

	// LET NÃO PERMITE que a variável seja re-declarada
	let fruta = "Maçã";
	console.log("LET: " + fruta); // Retorna "Identifier 'fruta' has already been declared"

	// A variável não pode ser re-declarada, mas seu valor pode ser alterado
	fruta = "Maçã"; 
	console.log("LET: " + fruta); // Retorna "Maçã"
}


// CONST - Faz com que uma variável seja acessada de forma global ou localmente e impeça que o valor da variável seja alterada no momento da execução.
function constant() {
	const carro = "Onix";
	console.log("CONST: " + carro);

	// carro = "HB20";
	console.log("CONST: " + carro); // Retorna erro "Assignment to constant variable"

	const turma = {sala: '33', escola: 'CEDUP'};
	console.log(turma);

	// Um atributo de um objeto pode ser alterado
	turma.sala = '37';
	console.log(turma);

	// Porém a estrutura não pode ser alterado
	turma = {alunos: '23', rendimento: 'Bom'};
	console.log(turma); // Retorna erro "Assignment to constant variable"
}