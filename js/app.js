//Modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const modalNumeros = document.getElementById("modalNumeros");

//Condicionales
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnCalificacion = document.getElementById("btnCalificacion");
const btnbtnTragos = document.getElementById("btnTragos");

//Bucles
const btnTablaMultiplicar = document.getElementById("btnTablaMultiplicar");
const btnAniosCumplidos = document.getElementById("btnAniosCumplidos");
const btnListaNumeros = document.getElementById("btnListaNumeros");
const btnCalculadora = document.getElementById("btnCalculadora");

//EventosCondicionales
btnParImpar.addEventListener("click", function () {
    abrirModal('Verificar si un número es par o impar', 'Permite al usuario ingresar un número y determina si es par o impar, mostrando el resultado.', verificarParImpar)
});
btnMayorEdad.addEventListener("click", function () {
    abrirModal('Verifica si el usuario es mayor o menor de edad', 'Permite al usuario ingresar su edad y determina si es Mayor o menor de edad.', verificarMayorEdad)
});
btnCalificacion.addEventListener("click", function () {
    abrirModal('Verifica si el usuario Aprobo/reprobo su curso', 'Permite al usuario ingresar su nota final y determina si ah aprobado o reprobado su curso.', aprobadoReprobado)
});
btnbtnTragos.addEventListener("click", function () {
    abrirModal('Verifica los tragos bebidos por el usuario', 'Permite al usuario ingresar la cantidad de tragos que ha bebido y comprueba si es apto para conducir.', tragosBebidos)
});

//EventosBucles
btnTablaMultiplicar.addEventListener("click", function () {
    abrirModal('Muestra la tabla de multiplicar', 'Permite al usuario ingresar un número el cual mostrata la tabla de mutiplicar del numero el limite es 10', tablaMultiplicar);
});
btnAniosCumplidos.addEventListener("click", function () {
    abrirModal('Años cumplidos', 'Permite al usuario ingresar su edad se le devolvera los años cumplidos', aniosCumplidos)
});
btnListaNumeros.addEventListener("click", function () {
    abrirModal('Lista de números', 'Permite al usuario un número se le devolvera una lista de números', listaNumeros)
});
btnCalculadora.addEventListener("click", function () {
    abrirModal('Calculadora', 'Seleccione una opcion, puede elegir entre S, R, M, D, donde \n S = Suma, \n R = Resta, \n M = Multiplicación ,\n D = División', calculadora)
});

let funcionEjercicioActual = null;
function abrirModal(titulo, descripcion, funcionEjercicio) {
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";

    funcionEjercicioActual = funcionEjercicio;

    modalNumeros.style.display = "none";
    modal.classList.add("activarModal");
}

btnCerrar.addEventListener("click", function () {
    modal.classList.remove("activarModal");
});

/* Ejercicio 01 condicionales numero PAR/IMPAR */
function verificarParImpar() {
    let numero = parseInt(respuesta.value)

    if (isNaN(numero)) {
        mensaje.textContent = `(${numero}) No es un número valido`;
    } else {
        mensaje.textContent = (numero % 2 === 0) ? `El número (${numero}) es un número PAR` : `El número (${numero}) es un número IMPAR`;
    }
}

/* Ejercicio 02 condicionales edad MAYOR/MENOR */
function verificarMayorEdad() {
    let edad = parseInt(respuesta.value);
    if (edad >= 18) {
        mensaje.textContent = `Tu edad es de ${edad}, Eres mayor de edad.`;
    } else {
        mensaje.textContent = `Tu edad es de ${edad}, Eres menor de edad.`;
    }
}

/* Ejercicio 03 condicionales APROBADO/REPROBADO */
function aprobadoReprobado() {
    let calificacion = parseInt(respuesta.value);

    if (calificacion >= 60) {
        mensaje.textContent = `Nota Final: ${calificacion}, El alumno aprueba el curso`;
    } else if (calificacion > 50) {
        mensaje.textContent = mensaje.textContent = `Nota Final: ${calificacion}, Por favor ¡estudie más!`;
    } else {
        mensaje.textContent = mensaje.textContent = `Nota Final: ${calificacion}, El alumno no aprueba la clase`;
    }
}

/* Ejercicio 04 condiconales medidor de grado alcohol*/
function tragosBebidos() {
    let tragos = parseInt(respuesta.value);

    if (isNaN(tragos)) {
        mensaje.textContent = `(${tragos}) Ingresa un número valido`;
    } else {
        mensaje.textContent = (tragos > 0) ? `Tragos bebidos "${tragos}" no puedes conducir ¡Tu familia te espera!` : `Tragos bebidos "${tragos}" nos alegra que seas un conductor responsable ¡Felicidades!`
    }
}

/* Ejercicio 01 bucle TABLAS DE MULTIPLICAR */
function tablaMultiplicar() {
    let limit = 10;
    let base = parseInt(respuesta.value);

    if (isNaN(base) || base <= 0) {
        mensaje.textContent = `${base} Ingresa un número válido`
    } else {
        let resultado = '';
        for (let i = 1; i <= limit; i++) {
            resultado += (`${i} * ${base} = ${i * base}<br>`);
        }
        mensaje.innerHTML = resultado;
    }
}

/* Ejercicio 02 bucle EDAD CUMPLIDA */
function aniosCumplidos() {
    let anios = parseInt(respuesta.value)

    if (isNaN(anios) || anios <= 0) {
        mensaje.textContent = `${anios} Ingresa un número válido y mayor que 0`
    } else {
        let aniosRespuesta = '';
        for (let i = 0; i <= anios; i++) {
            aniosRespuesta += (`Has cumplido ${i} años<br>`);
        }
        mensaje.innerHTML = aniosRespuesta;
    }
}

/* Ejercicio 03 bucle LISTA-NUMEROS */
function listaNumeros(params) {
    let lista = parseInt(respuesta.value)

    if (isNaN(lista) && lista <= 0) {
        mensaje.textContent = `${anios} Ingresa un número válido y mayor que 0`
    } else {
        let listaRespuesta = '';
        for (let i = 1; i <= lista; i++) {
            listaRespuesta += (`Número: ${i}<br>`)
        }
        mensaje.innerHTML = listaRespuesta;
    }
}
/* Ejercicio 03 bucle CALCULADORA */
function calculadora() {
    let operacion = respuesta.value.toLowerCase();
    let num1Valor = parseFloat(inputNum1.value);
    let num2Valor = parseFloat(inputNum2.value);
    let respuestaOperacion;

    switch (operacion) {
        case 's':
            operacionNombre = 'Suma';
            mensaje.textContent = 'Ha seleccionado la operación SUMA';
            respuestaOperacion = suma(num1Valor, num2Valor);
            modalNumeros.style.display = "block";
            break;
        case 'r':
            operacionNombre = 'Resta';
            mensaje.textContent = 'Ha seleccionado la operación RESTA';
            respuestaOperacion = resta(num1Valor, num2Valor);
            modalNumeros.style.display = "block";
            break;
        case 'm':
            operacionNombre = 'Multiplicación';
            mensaje.textContent = 'Ha seleccionado la operación MULTIPLICACIÓN';
            respuestaOperacion = multiplicacion(num1Valor, num2Valor)
            modalNumeros.style.display = "block";
            break;
        case 'd':
            operacionNombre = 'División';
            respuestaOperacion = mensaje.textContent = 'Ha seleccionado la operación DIVISIÓN';
            respuestaOperacion = division(num1Valor, num2Valor)
            modalNumeros.style.display = "block";
            break;
        default:
            mensaje.textContent = `(${operacion}) no existe en la lista, vuelve a intentarlo.`
    }
    mensaje.textContent = `Resultado de la operación ${operacionNombre} es: ${respuestaOperacion}`
    limpiarCampos();
}

function limpiarCampos() {
    const campos = document.querySelectorAll(".campo-limpieza");
    campos.forEach(campo => campo.value = "");
}

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

btnVerificar.addEventListener("click", function () {
    if (funcionEjercicioActual) {
        funcionEjercicioActual();
    }
});