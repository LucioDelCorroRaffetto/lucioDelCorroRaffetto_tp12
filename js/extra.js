// Función que convierte un string en minúscula a mayúscula
function upperConverter(texto) {
    return texto.toUpperCase();
}

// Función que devuelve el tipo de dato de un parámetro
function dataType(parametro) {
    return typeof parametro;
}

// Función que calcula la edad de un perro
function dogAge(humanAge) {
    return humanAge * 7;
}

// Función que calcula el valor de una hora de trabajo
function hourPrice(salarioMensual, diasTrabajados, horasPorDia) {
    const horasTotales = diasTrabajados * horasPorDia;
    return salarioMensual / horasTotales;
}

// console.log(upperConverter("hola"));
// console.log(dataType(10));
// console.log(dogAge(1));
// console.log(hourPrice(100, 10, 1));

// Módulo
module.exports = { upperConverter, dataType, dogAge, hourPrice };