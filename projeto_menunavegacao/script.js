const menuOpener = document.getElementById('menu-opener');
const menuArea = document.getElementById('menu-area');

function toggleMenu() {
	if (menuArea.style.width == '0px' || menuArea.style.width == '') {
		menuArea.style.width = '200px';
	} else {
		menuArea.style.width = '0px';
	}
}

menuOpener.addEventListener('click', toggleMenu);