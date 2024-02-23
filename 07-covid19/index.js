// atividade para encontra a quantidade total de infectados pela covid-19 //

// P = Po * x(elevado a tempo/7)    (fórmula) //

let populacao_infectada = 2475; // População inicial de pessoas infectadas //
let infectado = 4; // Qtd de pessoas ue um infectado pode transmitir //
let tempo = 100 / 7; // tempo percorrido em dias //

let total = populacao_infectada * Math.pow(infectado, tempo);
// total = 2475 * 4 elevado a (100 / 7) //
console.log(total);
