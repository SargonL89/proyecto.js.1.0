
function ingresarNombre() {
    debugger
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "" || nombre === null) {
    nombre = prompt("Ingrese su nombre")};
    console.log("Bienvenido a la sección Cursos", nombre,", esperamos que estés teniendo un buen día")
    console.log("Bienvenido a la sección Cursos", nombre,", esperamos que estés teniendo un buen día");
    alert("Bienvenido a la sección Cursos " + nombre + ", esperamos que estés teniendo un buen día")
}

function demandaYRespuesta() {
    debugger
    let opcionParcial1 = prompt("Si querés acceder al curso para el Primer Parcial de Neuro, presioná 1, sino, presioná 2")
    let opcionParcial2 = prompt("Si querés acceder al curso para el Segundo Parcial de Neuro, presioná 1, sino, presioná 2")
    let opcionFinal = prompt("Si querés acceder al curso para el Final de Neuro, presioná 1, sino, presioná 2");
    console.log("Perfecto! el total a abonar es: $", calculadora(opcionParcial1, opcionParcial2, opcionFinal))
    console.log("Perfecto! el total a abonar es: $", calculadora(opcionParcial1, opcionParcial2, opcionFinal));
    alert("Perfecto! el total a abonar es: $" + calculadora(opcionParcial1, opcionParcial2, opcionFinal))
}

let neuroParcial1 = 2400
let neuroParcial2 = 2400
let neuroFinal = 4000 

function calculadora(curso1, curso2, curso3) {
    if (curso1 === "1", curso2 === "2", curso3 === "2") {return neuroParcial1}
    else if (curso1 === "1", curso2 === "1", curso3 === "2") {return neuroParcial1 + neuroParcial2}
    else if (curso1 === "1", curso2 === "1", curso3 === "1") {return neuroParcial1 + neuroParcial2 + neuroFinal;}
} 

ingresarNombre();
demandaYRespuesta();