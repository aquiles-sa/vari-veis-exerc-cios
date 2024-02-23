// Atividade para encontrar a taxa de juros //

// i = M/C(elevado a 1/numero de meses) - 1  (fórmula) //

let montante = 75000; // montante 
let capital_inicial = 55000; // capital inicial 
let meses = 1 / 24; // número de meses

let taxa_de_juros = Math.pow(montante / capital_inicial, meses) - 1;
// taxa de juros = (75000 / 55000) elevado ao número de meses - 1 //
let taxa_simplificada = "1.300";

console.log(`O seu financiamento de ${capital_inicial} reais teve uma taxa de juros de ${taxa_simplificada}%, pois após 24 meses você teve que pagar ${montante} reais.`); 