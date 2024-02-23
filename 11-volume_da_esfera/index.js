// Atividade para calcular o volume de uma esfera //

// V = 4/3 * pi * r(ao cubo)   (Fórmula) //

// calcular a partir do diametro //

let diametro = 8; // diâmetro
let raio = Math.pow(diametro / 2, 3); // valor do raio
// raio = 2 elevado ao cubo //
let message = "O volume de uma esfera de raio 3 é";

let volume = 4 / 3 * raio;
// volume = 4 / 3 * valor do raio //
console.log(`${message} ${volume} PI`);