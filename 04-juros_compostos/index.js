// Atividade para descobrir o valor de juros compostos //

// M = C(1 + i) 2    (fórmula) //

let capital = 2000; // valor inicial //
let taxa_de_juros = 0.215; // taxa fixa de juros //
let periodo_de_tempo = 6; // período de tempo //

let montante = capital * Math.pow((1 + taxa_de_juros), 2);
// montante = 2000 * 1 + 0.215 elevado ao quadrado // 
console.log(montante);