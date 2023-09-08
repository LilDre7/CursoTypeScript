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

//! Interfaces 🙀 /!/
// La interface es igual al type, solo con un par de difencias
// La interface define nuestro objeto con algunas condiciones, pero no nos dice como sera el resultado.

interface Heroe {
  id: string
  name: string
  age: number
  saludar?: () => void
}

const hero: Heroe = {
  id: "1",
  name: "Alvaro",
  age: 20
}

// Ejemplo practico de una interface con TypeScript 🧨
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}

interface CarritoDeCompras {
  totalPrice: number
  productos: (Producto | Tenis)[]
}

interface Tenis extends Producto {
  talla: number
}

interface CarritoOps {
  add: (product: Producto) => void,
  remove: (id: number) => void,
  clear: () => void
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      quantity: 1,
    }
  ]
}

//! Narrowing ⚔️ //
// Sirve para controlar los tipo de los valores que se vayan a pasar.

function mostrarLongitud(objeto: number | string) {
  //?? Este typeof es el narrowing == Ya que verifica el tipo de dato ⚗️
  if (typeof objeto === "string") {
    return objeto.length
  }

  return objeto.toString().length
}

mostrarLongitud("1")

interface Mario {
  company: "nintendo",
  name: string,
  saltar: () => void
}

interface Sonic {
  company: "sega",
  name: string,
  correr: () => void
}

type NewUserGame = Mario | Sonic

function jugar(person: NewUserGame) {
  //! 🧨 Esta es una opcion pero no es la mas Viable 🧨 !//
  if(person.company === "nintendo"){
    person.saltar() // <-- Este es Mario.
  }

  // person.correr()
}

//! Type Guard 🪐 //

function esCadenas(valor: any): valor is string {
  return typeof valor === "number";
}

let variablex: any = 1;

if (esCadenas(variablex)) {
  // Dentro de este bloque, TypeScript sabe que "variable" es una cadena.
  console.log(variablex + 1); // Esto es seguro
} else {
  // Si no pasa la comprobación, TypeScript sigue considerando "variable" como "any".
  console.log("No es una cadena.");
}

//! TYPE NEVER ⚗️ //
// Lo unico que nos verifica es darnos un valor que nunca se uso
function fn(x: string | number) {
  if (typeof x === "string") {
    // x es string
    x.toUpperCase()
  } else if (typeof x === "number") {
    // do something
    x.toFixed(2)
  }else {
    // never ❎
  }
}

//?? Instance of y class
//?? Propiedades --> PRIVATE - PUBLIC - PROTECTED 
//?? Interfaces de classes
//?? Convencion .d.ts
//?? # - protected - private <-- Esto no es hace una variable privada