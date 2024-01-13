// Ejemplo: Pedir número mediante prompt y calcular el total de la compra
let cantidadProductos = parseInt(prompt("¿Cuántos productos compraste?"));
let totalCompra = 0;

for (let i = 1; i <= cantidadProductos; i++) {
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto #" + i));
    totalCompra += precioProducto;
}

alert("Total de la compra: $" + totalCompra.toFixed(2));

let textoConcatenado = "";
let entradaTexto;

while (entradaTexto !== "ESC") {
    entradaTexto = prompt("Ingrese un texto ('ESC' para salir):");
    textoConcatenado += entradaTexto + " ";
    alert("Texto acumulado: " + textoConcatenado);
}

let vecesHola = parseInt(prompt("¿Cuántas veces quieres que se repita el mensaje 'Hola'?"));

for (let i = 0; i < vecesHola; i++) {
    alert("Hola");
}