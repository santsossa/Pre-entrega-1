function calcularTotalCompra(cantidadProductos) {
    let totalCompra = 0;

    for (let i = 1; i <= cantidadProductos; i++) {
        let precioProducto = parseFloat(prompt("Ingrese el precio del producto #" + i));
        totalCompra += precioProducto;
    }

    return totalCompra.toFixed(2);
}

function concatenarTexto() {
    let textoConcatenado = "";
    let entradaTexto;

    while (entradaTexto !== "ESC") {
        entradaTexto = prompt("Ingrese un texto el cual se irá conectando con el anterior ('ESC' para salir):");
        if (entradaTexto !== "ESC") {
            textoConcatenado += entradaTexto + " ";
            alert("Texto acumulado: " + textoConcatenado);
        }
    }
}

function repetirSaludo(vecesHola) {
    for (let i = 0; i < vecesHola; i++) {
        alert("Hola");
    }
}

let cantidadProductos = parseInt(prompt("¿Cuántos productos compraste?"));

if (!isNaN(cantidadProductos)) {
    let totalCompra = calcularTotalCompra(cantidadProductos);
    alert("Total de la compra: $" + totalCompra);
} else {
    alert("Por favor, ingresa un número válido para la cantidad de productos.");
}

concatenarTexto();

let vecesHola = parseInt(prompt("¿Cuántas veces quieres que se repita el mensaje 'Hola'?"));

if (!isNaN(vecesHola)) {
    repetirSaludo(vecesHola);
} else {
    alert("Por favor, ingresa un número válido para la cantidad de repeticiones de 'Hola'.");
}
