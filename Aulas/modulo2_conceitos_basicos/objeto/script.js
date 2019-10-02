// Array é uma listagem de coisas, tem o indice NUMERADO
let carros = [
	// Objetos dentro de arrays
	{nome: 'Fiat', modelo: 'Palio'},
	{nome: 'Fiat', modelo: 'Uno'},
	{nome: 'Toyota', modelo: 'Corolla'},
	{nome: 'McLaren', modelo: 'P1'}
];

console.log(carros[2].modelo);

// Um objeto contém PROPRIEDADES é os itens são NOMEADOS, ao invés de numerados
let carro = {
	nome: 'Fiat',
	modelo: 'Uno',
	peso: '800kg',
	ligado: false,
	ligar: function() {
		console.log('Ligando o ' + this.modelo);
		this.ligado = true
		console.log('Vrum vrum');
	},
	acelerar: function() {
		if (this.ligado == true) {
			console.log('Riiiihhhhih');
		} else {
			console.log(this.nome + ' ' + this.modelo + ' não está ligado.');
		}
	},
	interior: {
		volante: 'Direção hidráulica'		
	}
};

// Maneiras de acessar uma propriedade em um objeto
console.log(carro['nome']);
console.log(carro.nome);
console.log(carro.interior.volante);

// Acessando uma função dentro de um objeto
carro.ligar();
carro.acelerar();