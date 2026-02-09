let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intentos = 0;
let historial = [];

function verificarNumero() {
    const numeroUsuario = Number(document.getElementById("numeroUsuario").value);
    const mensaje = document.getElementById("mensaje");
    const intentosTexto = document.getElementById("intentos");

    if (numeroUsuario < 1 || numeroUsuario > 20) {
        mensaje.textContent = "⚠️ Ingresa un número entre 1 y 20";
        return;
    }

    intentos++;
    historial.push(numeroUsuario);
    intentosTexto.textContent = "Intentos: " + intentos;

    if (numeroUsuario === numeroSecreto) {
        mensaje.textContent = "🎉 ¡Correcto! Adivinaste el número";
    } else if (numeroUsuario > numeroSecreto) {
        mensaje.textContent = "🔺 Muy alto";
    } else {
        mensaje.textContent = "🔻 Muy bajo";
    }
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 20) + 1;
    intentos = 0;
    historial = [];
    document.getElementById("mensaje").textContent = "";
    document.getElementById("intentos").textContent = "Intentos: 0";
    document.getElementById("numeroUsuario").value = "";
}
