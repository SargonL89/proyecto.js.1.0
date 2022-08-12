
function ingresarNombre() {
    debugger
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "" || nombre === null) {
    nombre = prompt("Ingrese su nombre")};
    console.log("Bienvenido a la sección Cursos", nombre,", esperamos que estés teniendo un buen día");
    alert("Bienvenido a la sección Cursos " + nombre + ", esperamos que estés teniendo un buen día")
}

const NeuroBParcial1 = {
    nombre: "Neuro B Parcial 1",
    modalidad: "Virtual y Presencial", 
    duración: "12 hs",
    precio: "$2500"
}
const NeuroBParcial2 = {
    nombre: "Neuro B Parcial 2",
    modalidad: "Virtual y Presencial", 
    duración: "12 hs",
    precio: "$2500"
}
const NeuroBFinal = {
    nombre: "Neuro B Final",
    modalidad: "Virtual y Presencial", 
    duración: "24 hs",
    precio: "$4000"
}
const ExpeParcial1 = {
    nombre: "Expe Parcial 1",
    modalidad: "Virtual y Presencial", 
    duración: "12 hs",
    precio: "$2500"
}
const ExpeParcial2 = {
    nombre: "Expe Parcial 1",
    modalidad: "Virtual y Presencial", 
    duración: "12 hs",
    precio: "$2500"
}
const ExpeFinal = {
    nombre: "Expe Final",
    modalidad: "Virtual y Presencial", 
    duración: "24 hs",
    precio: "$4000"
}

function visualizarCursos() {
    debugger
    let election; 
    election = prompt("Si te interesa visualizar los cursos que tenemos disponibles para: \nNeuro B, presioná 1 \nExpe, presioná 2");
    
    switch (election) {
        case "1":
            alert(NeuroBParcial1.nombre)
        case "2":
            alert(ExpeParcial1)
    }
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



function calculadora(curso1, curso2, curso3) {
    if (curso1 === "1", curso2 === "2", curso3 === "2") {return neuroParcial1}
    else if (curso1 === "1", curso2 === "1", curso3 === "2") {return neuroParcial1 + neuroParcial2}
    else if (curso1 === "1", curso2 === "1", curso3 === "1") {return neuroParcial1 + neuroParcial2 + neuroFinal;}
} 

ingresarNombre();
visualizarCursos();
demandaYRespuesta();