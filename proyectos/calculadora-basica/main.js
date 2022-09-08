'use strict'

//------------------- Nodos --------------------
const nodos = document.querySelectorAll(".theme")
const calculadora = document.getElementById("calculadora")
const pantalla = document.getElementById("pantalla")
const pantallaArriba = document.getElementById("pantallaArriba")
const pantallaAbajo = document.getElementById("pantallaAbajo")
const botonBorrarTodo = document.getElementById("boton-borrar-todo")
const botonBorrar = document.getElementById("boton-borrar")
const botonIgual = document.getElementById("boton-igual")
const boton = document.querySelectorAll("button")

//---------- Funciones de operaciones ----------
let sumar = function (a, b) {
    return a + b
}
let restar = function (a, b) {
    return a - b
}
let multiplicar = function (a, b) {
    return a * b
}
let dividir = function (a, b) {
    return a / b
}

let calcularResultado = function() {
    switch (operacion) {
        case "+":
            resultado = sumar (parseFloat(valorA), parseFloat(valorB));
            finOperacion(resultado)
            break;
        case "-":
            resultado = restar (parseFloat(valorA), parseFloat(valorB));
            finOperacion(resultado)
            break;
        case "x":
            resultado = multiplicar (parseFloat(valorA), parseFloat(valorB));
            finOperacion(resultado)
            break;
        case "÷":
            resultado = dividir (parseFloat(valorA), parseFloat(valorB));
            finOperacion(resultado)
            break;
    }
}

let calcularPorcentaje = function () {
    if (operacion == "x") {
        resultado = parseFloat(valorA) * (parseFloat(valorB) / 100)
        finOperacion(resultado)
    } else if (operacion == "-") {
        resultado = parseFloat(valorA) - (parseFloat(valorA) * (parseFloat(valorB / 100)))
        finOperacion(resultado)
    } else if (operacion == "+") {
        resultado = parseFloat(valorA) + (parseFloat(valorA) * (parseFloat(valorB / 100)))
        finOperacion(resultado)
    }
}
//------------- Funciones de display -----------
let finOperacion = function() {
    pantallaArriba.innerText = resultado
    pantallaAbajo.innerText = ""
    valorA = resultado.toString()
    valorB = ""
    operacion = ""
    return valorA
}
//-------------- Valores temporales ------------
let valorA = ""
let mostrar = ""
let valorB = ""
let operacion = ""
let resultado = ""


//--------- Funcion de ingreso en pantalla -----
boton.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        if (!operacion && boton.classList.contains("numero")) {
            if (!operacion) {
                console.log("estas en A")
                valorA = valorA + boton.value
                mostrar =  valorA
                pantallaAbajo.innerText = mostrar 
            }
        } else if (boton.classList.contains("operacion")) {
            if (!operacion) {
                console.log("estas en B")
                operacion = boton.value
                mostrar = valorA + operacion
                pantallaAbajo.innerText = mostrar 
            } else {
                console.log("estas en C")
                calcularResultado()
                operacion = boton.value
            }
        } else if (valorA && boton.classList.contains("numero")) {
            console.log("estas en D")
            valorB = valorB + boton.value
            mostrar = valorA + operacion + valorB
            pantallaAbajo.innerText = mostrar 
        } else if (boton.classList.contains("porcentaje")){
            calcularPorcentaje()
        } else if (boton.id === "boton-igual") {
            calcularResultado()
        }
    })
})

boton.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        console.log("valorA: ", valorA, "valorB: ", valorB, "operacion:", operacion)
    })
})

//Funcion del boton AC (borrar todo)
botonBorrarTodo.addEventListener("click", ()=>{
    valorA = ""
    valorB = ""
    mostrar = ""
    operacion = ""
    pantallaArriba.innerText = mostrar
    pantallaAbajo.innerText = mostrar
})

botonIgual.addEventListener("click", ()=>{
    calcularResultado()
})

//------------- Posibles errores ---------------

//------------------- Extras -------------------
let botonMenu = document.getElementById("boton-menu")
let menuOpciones = document.getElementById("menu-opciones")
let botonLightMode = document.getElementById("boton-light-mode")

botonMenu.addEventListener("click", ()=>{
    menuOpciones.className = open
})

//------------ Night Mode ----------------------
botonLightMode.addEventListener("click", ()=>{
    if (calculadora.classList.contains("night")) {
        nodos.forEach((nodos)=>{
            nodos.classList.remove("night")
            nodos.classList.add("day")
            menuOpciones.classList.remove("open")
            menuOpciones.classList.add("close")
            botonLightMode.innerText = "Activar modo nocturno"
        })
    } else if (calculadora.classList.contains("day")) {
        nodos.forEach((nodos)=>{
            nodos.classList.remove("day")
            nodos.classList.add("night")
            menuOpciones.classList.remove("open")
            menuOpciones.classList.add("close")
            botonLightMode.innerText = "Desactivar modo nocturno"
        })

    }
})