let date = new Date(); 

date.setFullYear(2022); // Seta o ano 
date.setMonth(11) // Seta o mês
date.setDate(date.getDate() + 5) // Seta o dia
date.setHours(date.getHours() + 6) // Seta as horas
date.setMinutes(date.getMinutes() - 300) // Seta os minutos

console.log(date);