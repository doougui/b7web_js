/*
PADRÕES DE VARIÁVEIS em JAVASCRIPT (JS)

Estilos aceitos:

x_y  |  Estilo UnderScore  ----   XY  | Estilo GreatScore  ----  xY  | Estilo Misto (mais usado!)

Convencionada entre programadores JS --- > 1º Palavra com todas as letras minúsculas e 2º Palavra com a inicial maiúscula e as demais minúsculas.

Exemplo: nomePrimeiro, homemEmpregado, quantidadeFeijao.

Em JS não pode ser variável:

-  Variável começando com número. Ex: 2texto, 10meninas, 5pedras.
-  Com espaço em branco. Ex: o texto, peso total, media geral.
-  Com caracteres especiais ou acentos. Ex: cabeça, número, mão.

JS é case sensitive, ou seja, há diferenciação entre maiúsculas e minúsculas.

Ex: d é diferente de D. Se você atribuir um valor a uma variável de nome d e buscar o valor dela em D irá acusar que o valor da variável D não foi definida.
Obs: pesototal, pesoTotal e PesoTotal são variáveis diferentes.
 */

// Resultado: Douglas Pinheiro Goulart
var nome = "Douglas";
var sobrenome = "Pinheiro Goulart";
var nomeCompleto = nome + ' ' + sobrenome;

// Resultado: Douglas17
var idade = 17;
var juncao = nome + idade;

// Resultado: 25
var x = 10;
var y = 15;

var total = x + y;

// Resultado: 1015
var x = "10";
var y = "15";

var total = x + y;
