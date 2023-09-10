let dolar_oficial = 367;

// Aluminio 75x25 - 1mt vale 12.36 dólar
let aluminioAnodizado_75x25 = 15.30;
let pedido_75x25 = parseFloat(prompt("Metros de Aluminio Anodizado 75x25 deseados: "));

let metros_75x25 = pedido_75x25;
let precio_75x25 = aluminioAnodizado_75x25 * metros_75x25;
console.log("Precio Total para " + pedido_75x25 + " metros de aluminio 75x25 = " + precio_75x25 + "\n");

// Aluminio 75x25 - 1mt vale 8.66 dólar
let aluminioAnodizado_50x25 = 10.50;
let pedido_50x25 = parseFloat(prompt("Metros de Aluminio Anodizado 50x25 deseados: "));

let metros_50x25 = pedido_50x25;
let precio_50x25 = aluminioAnodizado_50x25 * metros_50x25;
console.log("Precio Total para " + pedido_50x25 + " metros de aluminio 50x25 = " + precio_50x25 + "\n");

// Almohadones Grande y Chico - combo almohadones por sillon de un cuerpo vale 80 dólar
let almohadon_grandeYchico = 108;
let pedido_almohadones = parseFloat(prompt("Combos de almohadones deseados: "));

let metros_almohadones = pedido_almohadones;
let precio_almohadones = almohadon_grandeYchico * metros_almohadones;
console.log("Precio Total para " + pedido_almohadones + " combos de almohadones = " + precio_almohadones + "\n");

// WPC - 1mt 20 dólar
let wpc_mt = 20;
let pedido_wpc = parseFloat(prompt("Metros de WPC deseados: "));

let metros_wpc = pedido_wpc;
let precio_wpc = wpc_mt * metros_wpc;
console.log("Precio Total para " + pedido_wpc + " metros de WPC = " + precio_wpc + "\n");

// TOTAL
let precio_total = precio_50x25 + precio_75x25 + precio_almohadones + precio_wpc;
let total_dolares = precio_total;
let total_pesos = total_dolares * dolar_oficial;

let precio_total_pesos = total_pesos.toFixed(2);
let precio_total_multiplicado = (total_pesos * 2.14 + 5000).toFixed(2);

console.log("Precio total en pesos = " + precio_total_pesos);
console.log("Precio final multiplicado por 2.14 + 5000 de extras = " + precio_total_multiplicado);

