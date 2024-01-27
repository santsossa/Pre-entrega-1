function calcularPrecioConDescuento() {
    const precioProducto = obtenerPrecio("precioProducto");
    const porcentajeDescuento = obtenerPorcentajeDescuento("porcentajeDescuento");

    const precioConDescuento = calcularPrecioDescuento(precioProducto, porcentajeDescuento);

    mostrarResultado(precioConDescuento);
}

function obtenerPrecio(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function obtenerPorcentajeDescuento(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function calcularPrecioDescuento(precioProducto, porcentajeDescuento) {
    const descuento = precioProducto * (porcentajeDescuento / 100);
    const precioConDescuento = precioProducto - descuento;
    return precioConDescuento;
}

function mostrarResultado(precioConDescuento) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El precio con descuento es: $${precioConDescuento.toFixed(2)}`;
}
function calcularPrecioConDescuento() {
    const precioProducto = obtenerPrecio("precioProducto");
    const porcentajeDescuento = obtenerPorcentajeDescuento("porcentajeDescuento");

    const precioConDescuento = calcularPrecioDescuento(precioProducto, porcentajeDescuento);

    mostrarResultado(precioConDescuento);
}

function obtenerPrecio(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function obtenerPorcentajeDescuento(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function calcularPrecioDescuento(precioProducto, porcentajeDescuento) {
    const descuento = precioProducto * (porcentajeDescuento / 100);
    const precioConDescuento = precioProducto - descuento;
    return precioConDescuento;
}

function mostrarResultado(precioConDescuento) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El precio con descuento es: $${precioConDescuento.toFixed(2)}`;
}
