// Lista de amigos
let listaAmigos = [];

/**
 * Asigna texto a un elemento del DOM.
 * @param {string} elemento - Selector del elemento.
 * @param {string} texto - Texto a asignar.
 */
function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

/**
 * Agrega un amigo a la lista.
 */
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();

    if (!nombre) {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    limpiarCaja();
}

/**
 * Limpia el campo de entrada.
 */
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

/**
 * Actualiza la lista de amigos en el DOM.
 */
function actualizarLista() {
    const ul = document.querySelector('#listaAmigos');
    ul.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

/**
 * Realiza el sorteo de un amigo secreto y muestra el resultado.
 */
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoGanador = listaAmigos[indiceAleatorio];

    mostrarResultado(amigoGanador);
    limpiarLista();
}

/**
 * Muestra el resultado del sorteo en el DOM.
 * @param {string} amigoGanador - Nombre del amigo sorteado.
 */
function mostrarResultado(amigoGanador) {
    const ulResultado = document.querySelector('#resultado');
    ulResultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = ` El amigo secreto sorteado es: ${amigoGanador}`;
    ulResultado.appendChild(li);
}

/**
 * Limpia la lista de amigos en el DOM y en la memoria.
 */
function limpiarLista() {
    listaAmigos = [];
    actualizarLista();
}