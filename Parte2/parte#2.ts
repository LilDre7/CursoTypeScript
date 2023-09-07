//! ENUMS 🐲 /!/
// Deben ser finitos NO 🧨 INFINITOS 

const enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}

function mostrarMensajes(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso")
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes permisos para acceder")
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes permiso para acceder")
  }
}

//! ⚔️ ASERCIONES DE TIPO /!/

// NULL SI NO LO ENCUENTRA 🧨
// HTML SI LO ENCUENTRA 🧨

// ?? COMO SABE TypeSCRIPT que realmente estas recuperando un elemento <canvas />

//** Forma MUY Incorrecta de buscar el canvas 🧨 //
let canvas = document.getElementById("button") as HTMLCanvasElement

const ctx = canvas.getContext("2d")

// Forma NO incorrecta pero no mas viable 🧨

let canvas2 = document.querySelector("canvas")

if (canvas2 !== null) {
  const ctx = (canvas as HTMLCanvasElement).getContext("2d")
}

// ! FORMA CORRECTA DE BUSCAR NUESTRO CANVAS 🧑🏾‍💻⚔️ /!/

let canvas3 = document.querySelector("span")

if (canvas3 instanceof HTMLCanvasElement) {
  // Aqui estamos deduciendo que canvas es un un HTMLCANVASELEMENT
  const ctx = (canvas as HTMLCanvasElement).getContext("2d")
}