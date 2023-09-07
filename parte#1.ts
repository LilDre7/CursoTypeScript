const personas: any = {
  name: "Alvaro",
  edad: 20
}

personas.name()

// ¿Que es any? 🔍
// Es es cualquiera - NO usarlo si es necesario - Es ignorar el valor de tipado de TS

let saludo: any = "Hola"
saludo = 2
saludo = true

// ¿Que es unknown?
// No se cual es el tipo de dato que tengo
let adios: unknown = "Bay"
adios = 1

// Function
// Se le debe dar un tipo de dato.
function saludar({ name, age }: { name: string, age: number }): number {
  console.log(`Hello ${name}, tienes ${age} años`)
  return age
}
saludar({ name: "Lil dree", age: 20 })


const suma = (a: number, b: number): number => {
  return a + b
}

const numbers: number[] = [
  12, 12, 12
]

// Type Alias
type Hero = {
  name: string,
  age: number,
  available?: boolean
}

let hero: Hero = {
  name: "thor",
  age: 20,
  available: true
}

const createHero = (hero: Hero): Hero => {
  const { name, age } = hero
  return { name, age }
}

// Optional Properties
/* Es cuando colocamos alguna opcion el signo de interrogaccion = ? = 
para poder darla la option de no obligatorio a nuestro dato */

// Template union types
type hexadecimal = `#${string}`
type objectNew = {}

const color: hexadecimal = "#0033ff"
const colorDos: hexadecimal = "#230021"

const objVacio: objectNew = []

// Option Properties ⚗️