const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
	// method: 'POST',
	// body: JSON.stringify({
	// 	nome: 'Douglas',
	// 	idade: 17
	// })
};

fetch(url, params)
	.then((response) => response.json())
	.then((json) => {
		console.log(json);
	});