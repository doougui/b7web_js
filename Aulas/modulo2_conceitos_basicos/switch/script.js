let data = new Date();
let dia = data.getDay();
let diaNome = '';

switch(dia) {
	case 0:
	case 7:
		diaNome = 'Domingo';
		break;
	case 1:
		diaNome = 'Segunda-feira';
		break;
	case 2:
		diaNome = 'Terça-feira';
		break;
	case 3:
		diaNome = 'Quarta-feira';
		break;
	case 4:
		diaNome = 'Quinta-feira';
		break;
	case 5:
		diaNome = 'Sexta-feira';
		break;
	case 6:
		diaNome = 'Sábado';
		break;
	default:
		diaNome = 'Dia inexistente';
		break;
}

document.getElementById('dia').innerHTML = 'Hoje é: ' + diaNome;