let date = new Date(); 

console.log(`ANO: ${date.getFullYear()}`); // Retorna o ano
console.log(`MÊS: ${date.getMonth()}`); // Retorna o mês. OBS: Janeiro = mês 0
console.log(`DIA: ${date.getDate()}`); // Retorna o dia
console.log(`DIA DA SEMANA: ${date.getDay()}`); // Retorna o dia da semana. 0-6, sendo domingo o dia
console.log(`HORAS: ${date.getHours()}`); // Retorna as horas
console.log(`MINUTOS: ${date.getMinutes()}`); // Retorna os minutos
console.log(`SEGUNDOS: ${date.getSeconds()}`); // Retorna os segundos
console.log(`MILISEGUNDOS: ${date.getMilliseconds()}`); // Retorna os milisegundos
console.log(`TIMESTAMP: ${date.getTime()}`); // Retorna o timestamp
console.log(`DATA ATUAL SEM PRECISAR INSTANCIONAR UM OBJETO: ${Date.now()}`); // Retorna o timestamp do momento atual
