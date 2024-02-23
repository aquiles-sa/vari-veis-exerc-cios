// Atividade para achar o valor de Delta da fórmula de bháskara //

// ax(ao quadrado) + bx + c    (Equação do segundo grau) //

// delta = b(ao quadrado) - 4ac    (fórmula para encontrar o valor de Delta) //

let a = Math.pow(2, 2); // valor de a elevado ao quadrado
let b = 5; // valor de b
let c = 1; // valor de c

let ac = a * c;
// ac = 2 elevado ao quadrado * 1 //

let delta = Math.pow(5, 2) - 4 * ac;
// delta = 5 elevado ao quadrado - 4 * valor de ac //
console.log(delta);