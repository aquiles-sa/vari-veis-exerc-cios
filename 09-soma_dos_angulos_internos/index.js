// Atividade para somar os ângulos internos de um polígono //

// S = (n - 2) * 180  (fórmula da soma) //
// a = S / n (fórmula para o valor de cada ângulo) //

let numero_de_lados = 9; // numero de lados do polígono
let soma_dos_angulos_internos = (numero_de_lados - 2) * 180; // soma dos ângulos internos
// soma dos ângulos internos = (9 - 2) * 180 //
console.log(soma_dos_angulos_internos);

let valor_de_cada_angulo = soma_dos_angulos_internos / numero_de_lados;
// valor de cada ângulo = resultado da soma dos ângulos internos / 9
console.log(valor_de_cada_angulo);
