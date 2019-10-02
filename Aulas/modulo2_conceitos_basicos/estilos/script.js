const titulo = document.getElementById('titulo');

function limpar() {
	titulo.classList.remove('azul');
	titulo.classList.remove('vermelho');
	titulo.classList.remove('verde');
}

function azul() {
	limpar();
	titulo.classList.add('azul');
};

function vermelho() {
	limpar();
	titulo.classList.add('vermelho');
};

function verde() {
	limpar();
	titulo.classList.add('verde');
};

const telefone = document.getElementById('telefone');

function mostrarTelefone(element) {
	element.style.display = 'none';
	telefone.style.display = 'block';
}