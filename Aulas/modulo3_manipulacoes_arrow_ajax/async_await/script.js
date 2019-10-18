function requisitar() {
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

	console.log('Alguma coisa');
}

async function requisitar2() {
	const url = 'https://alunos.b7web.com.br/api/ping';

	const r = await fetch(url);
	const json = await r.json();

	console.log(json);
	console.log('Alguma coisa');
}

requisitar2();
console.log('Texto qualquer');