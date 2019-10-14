let pessoa = {
	nome: 'Douglas',
	sobrenome: 'Pinheiro Goulart',
	idade: 17,
	social: {
		twitter: 'oDougui',
		instagram: {
			url: '@doug_pg',
			followers: 33
		}
	},
	nomeCompleto: function() {
		return `${this.nome} ${this.sobrenome}`;
	}
}

let {twitter:tt, instagram:insta} = pessoa.social;
let {nome, idade, social:{ instagram:{url:instagram, followers} } } = pessoa;

console.log(instagram, followers);

function getFullName({nome, sobrenome, social:{twitter}}) {
	return `${nome} ${sobrenome}. Siga em @${twitter}`;
}

console.log(getFullName(pessoa));