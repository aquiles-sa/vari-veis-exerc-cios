// Atividade para calcular a distância de dois pontos. //

// (x1, x2), (y1, y2)

let x1 = 2; // primeiro valor x //
let y1 = 6; // primeiro valor y //

let x2 = 4; // segundo valor x //
let y2 = 9; // segundo valor y //

let primeiraPotencia = Math.pow((x2 + x1), 2);
let segundaPotencia = Math.pow((y2 - y1), 2);

let distancia = Math.sqrt(primeiraPotencia + segundaPotencia);
console.log(distancia);

