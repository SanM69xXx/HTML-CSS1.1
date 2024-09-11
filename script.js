// Declaración de variables con 'let'
let producto1 = "Zapatilla Deportiva 1";
let precio1 = 50;
let producto2 = "Zapatilla Deportiva 2";
let precio2 = 75;
let producto3 = "Zapatilla Deportiva 3";
let precio3 = 100;
let cantidadProducto1 = 2;
let cantidadProducto2 = 1;
let cantidadProducto3 = 3;
let totalCompra = 0;

// Declaración de constantes
const descuentoProducto1 = 0.1;  // 10% de descuento
const descuentoProducto2 = 0.15; // 15% de descuento
const descuentoProducto3 = 0.2;  // 20% de descuento
const limiteParaDescuento = 100;
const mensajeCompra = "Gracias por tu compra";

// Operaciones
let subtotalProducto1 = precio1 * cantidadProducto1;
let subtotalProducto2 = precio2 * cantidadProducto2;
let subtotalProducto3 = precio3 * cantidadProducto3;

// Aplicación de descuentos usando operador ternario
let precioFinalProducto1 = subtotalProducto1 > limiteParaDescuento ? subtotalProducto1 * (1 - descuentoProducto1) : subtotalProducto1;
let precioFinalProducto2 = subtotalProducto2 > limiteParaDescuento ? subtotalProducto2 * (1 - descuentoProducto2) : subtotalProducto2;
let precioFinalProducto3 = subtotalProducto3 > limiteParaDescuento ? subtotalProducto3 * (1 - descuentoProducto3) : subtotalProducto3;

// Sumar los totales
totalCompra = precioFinalProducto1 + precioFinalProducto2 + precioFinalProducto3;

// Mostrar el total de la compra en la consola
console.log("Total de la compra: $" + totalCompra.toFixed(2));

// Mostrar mensaje de agradecimiento si la compra supera cierto límite
let mensajeFinal = totalCompra > limiteParaDescuento ? mensajeCompra : "Sigue comprando para obtener descuentos adicionales";
console.log(mensajeFinal);

// Manejar el evento de compra
document.getElementById('comprar-btn').addEventListener('click', function() {
    alert(`Total a pagar: $${totalCompra.toFixed(2)}\n${mensajeFinal}`);
});
