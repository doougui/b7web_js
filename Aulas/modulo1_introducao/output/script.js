/*
nodeValue vs innerHTML and textContent. How to choose?
> https://stackoverflow.com/questions/21311299/nodevalue-vs-innerhtml-and-textcontent-how-to-choose
 */

// Manipulação da página (document)

// innerHTML parses content as HTML and takes longer.
document.getElementById("titulo").innerHTML = "Opa, tudo bem?";

// nodeValue is a little more confusing to use, but faster than innerHTML
document.getElementById("sub-titulo").nodeValue = "Bem mesmo?";

// textContent uses straight text, does not parse HTML, and is faster. 
document.getElementById("sub-sub-titulo").textContent = "Como vai a vida meu jovem?"; 

// innerText takes styles into consideration. It won't get hidden text for instance.
document.getElementById("sub-sub-sub-titulo").textContent = "É o último eu juro.";

// document.write is... just avoid using it
document.write("Algum texto qualquer.");

// Manipulação da janela (window)
window.alert("Mensagem de exemplo.");
alert("Mensagem de exemplo utilizando atalho.");

// Mensagens geralmente direcionadas para o desenvolvedor
console.log("A mensagem que eu inserir aqui aparecerá no console.");