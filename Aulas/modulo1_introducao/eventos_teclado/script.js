function digitou(e) {
	console.log(e);

	if (e.keyCode == '13' && e.ctrlKey == true) { // Ctrl + Enter
		let texto = document.getElementById('campo').value;

		console.log(texto);
	}
}