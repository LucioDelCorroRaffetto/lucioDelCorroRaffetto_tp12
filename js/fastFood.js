// Función callback para calcular el total a pagar
function calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {

    // defino a la variable para el precio
    let precioBase;
  
    // Precio base de la hamburguesa según el tipo
    switch (tipoHamburguesa) {
      case "Carne a la parrilla":
        precioBase = 1800;
        break;
      case "Pollo":
        precioBase = 1500;
        break;
      case "Vegetariana":
        precioBase = 1200;
        break;
      default:
        console.log("Tipo de hamburguesa no válido.");
        return 0;
    }
  
    // Precios de los adicionales
    const preciosAdicionales = {
      jamon: 30,
      queso: 25,
      salsaTomate: 5,
      mayonesa: 5,
      mostaza: 5,
      tomate: 15,
      lechuga: 10,
      cebolla: 10,
    };
  
    // Total de adicionales
    let totalAdicionales = 0;
    if (jamon) totalAdicionales += preciosAdicionales.jamon;
    if (queso) totalAdicionales += preciosAdicionales.queso;
    if (salsaTomate) totalAdicionales += preciosAdicionales.salsaTomate;
    if (mayonesa) totalAdicionales += preciosAdicionales.mayonesa;
    if (mostaza) totalAdicionales += preciosAdicionales.mostaza;
    if (tomate) totalAdicionales += preciosAdicionales.tomate;
    if (lechuga) totalAdicionales += preciosAdicionales.lechuga;
    if (cebolla) totalAdicionales += preciosAdicionales.cebolla;
  
    //  a pagar
    let totalPagar = precioBase + totalAdicionales;
    return totalPagar;
    }
  
    // Función principal (callback y muestra el mensaje al usuario)
    function fastFood(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    
    // total llamando a la función callback
    let totalPagar = calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
  
    // Mensaje final
    let mensaje = `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${totalPagar}.`;
    return mensaje;
    }
  
// let mensaje = fastFood("Juan", "Perez", "Carne a la parrilla", true, false, true, false, true, false, true, false);
// console.log(mensaje);
  
// let mensaje2 = fastFood("Jose", "San Martin", "Pollo", true, true, true, true, true, true, true, true);
// console.log(mensaje2);
  
// let mensaje3 = fastFood("Mirhta", "Legrand", "Vegetariana", false, false, false, false, false, false, false, false);
// console.log(mensaje3);