let date = new Date(2020, 0, 1, 12, 30, 12, 300); // Gera a data baseada nos parâmetros passados. Retorno: 01/01/2020 12:30:12:30h

console.log(date); // Fri Oct 11 2019 21:22:08 GMT-0300 (Horário Padrão de Brasília)
console.log(date.toDateString()); // Fri Oct 11 2019
console.log(date.toUTCString()); // Sat, 12 Oct 2019 00:22:37 GMT

let dateString = new Date('2020-01-01 12:30:12:30'); // Data utilizando somente uma string
let dateTimestamp = new Date(0); // Thu, 01 Jan 1970 00:00:00 GMT
let dateMilliseconds = new Date(751249801249); // Fri, 22 Oct 1993 00:30:01 GMT
let dateNegativeMilliseconds = new Date(-751249801249); // Tue, 12 Mar 1946 23:29:58 GMT