//Modal constantes
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

//btn Condicionales
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnCalificacion = document.getElementById("btnCalificacion");
const btnbtnTragos = document.getElementById("btnTragos");

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

let funcionEjercicioActual = null;

function abrirModal(titulo, descripcion, funcionEjercicio) {
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";

    funcionEjercicioActual = funcionEjercicio;

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


btnVerificar.addEventListener("click", function () {
    if (funcionEjercicioActual) {
        funcionEjercicioActual();
    }
});