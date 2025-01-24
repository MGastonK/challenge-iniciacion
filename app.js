// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value.trim();
  
    if (amigo !== "") {
      amigos.push(amigo);
      actualizarListaAmigos();
        } else {
      alert("Por favor, inserte un nombre.");
    }
    limpiarCaja();
    return;
  }
  
  function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla
    for (let i = 0; i < amigos.length; i++) {
      const li = document.createElement("li");
      li.textContent = amigos[i];
      listaAmigos.appendChild(li);
    }
    return;
  }


  function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para sortear.");
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>EL AMIGO SECRETO ES: <strong>${amigoSorteado}</strong></li>`;
  }



  