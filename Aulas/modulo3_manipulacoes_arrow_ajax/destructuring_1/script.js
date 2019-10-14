let pessoa = {
	nome: 'Douglas',
	sobrenome: 'Pinheiro Goulart',
	idade: 17,
	social: {
		twitter: 'oDougui',
		instagram: 'doug_pg'
	},
	nomeCompleto: function() {
		return `${this.nome} ${this.sobrenome}`;
	}
}

let {nome:pessoaNome, sobrenome, idade = 0} = pessoa;

console.log(pessoaNome, idade);