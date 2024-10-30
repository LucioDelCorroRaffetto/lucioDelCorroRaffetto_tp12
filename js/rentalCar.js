// Creo el function
function rentalCar(tipoVehiculo, diasAlquiler, sillaBebe) {

    // Defino tarifas por tipo de vehículo
    let tarifaPorDia;

    // Clasifico las tarifas
    if (tipoVehiculo === "Compacto") {
        tarifaPorDia = 14000;
    } else if (tipoVehiculo === "Mediano") {
        tarifaPorDia = 17000;
    } else if (tipoVehiculo === "Camioneta") {
        tarifaPorDia = 28000;
    } else {
        console.log("Tipo de vehículo no válido");
        return;
    }

    // Calculo el costo base
    let costoBase = tarifaPorDia * diasAlquiler;

    // Calculo costo adicional por silla para bebé
    let costoSillaBebe = sillaBebe ? 1200 * diasAlquiler : 0;

    // Calculo el total a pagar
    let totalPagar = costoBase + costoSillaBebe;

    // Mensaje final
    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo.toLowerCase()} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${totalPagar}.`;

    if (sillaBebe) {
        mensaje += " Se ha incluido una silla para niños.";
    }

    return mensaje;
}

// console.log(rentalCar("Compacto", 1, true));
// console.log(rentalCar("Mediano", 4, false));
// console.log(rentalCar("Camioneta", 7, true));