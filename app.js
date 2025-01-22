// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let inputNombre = "";
let lista = "";
let indiceAleatorio = 0;
let resultado = 0;

//funcion para agregar nombres a un vector
function agregarAmigo() {
  inputNombre = document.getElementById("amigo").value;

  //Validar la entrada del nombre
  if (inputNombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(inputNombre);
    //limpiar el imput
    inputNombre = document.getElementById("amigo").value = "";

    listaAmigos();
  }
}

//funcion para imprimir los nombres
function listaAmigos() {
  lista = document.getElementById("listaAmigos");
  let contenido = "";

  for (let i = 0; i < amigos.length; i++) {
    contenido += `<li>${amigos[i]}</li>`;
  }
  lista.innerHTML = contenido;
}

//Funcion para seleccionar un nombre existente dentro del vector
function sortearAmigo() {
  if (amigos.length != 0) {
    indiceAleatorio = Math.floor(Math.random() * 10);

    if (indiceAleatorio < amigos.length) {
      resultado = document.getElementById("resultado");

      return (resultado.innerHTML = amigos[indiceAleatorio]);
    } else {
      return sortearAmigo();
    }
  }
}
