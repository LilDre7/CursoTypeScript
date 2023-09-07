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
// type Hero = {
//   name: string,
//   age: number,
//   available?: boolean
// }

// let hero: Hero = {
//   name: "thor",
//   age: 20,
//   available: true
// }

// const createHero = (hero: Hero): Hero => {
//   const { name, age } = hero
//   return { name, age }
// }

//! Option Properties ⚗️ == ?
// Optional Properties
/* Es cuando colocamos alguna opcion el signo de interrogaccion = ? =
para poder darla la option de no obligatorio a nuestro dato */

// Template union types
type hexadecimal = `#${string}`

const color: hexadecimal = "#0033ff"
const colorDos: hexadecimal = "#230021"

//! Union Types ⚔️ !//

type heroPowerScale = "local" | "planetary" | "low" | "heigth" | "galactic"

// Example
// Acaepta cualquier estos 2 valores
let planetId: string | number

planetId = 1

let myAge: 20 | 20

myAge = 20

// ! Intersection Types == & 🐲 /!/

type userInfoPersonal = {
  name: string,
  age: number
}

type userDateProfesional = {
  id: number,
  position: string,
  available: boolean
}

type fullUser = userDateProfesional & userDateProfesional

//! Type Indexing ⚗️ /!/

type heroProperties = {
  isActive: boolean,
  address: {
    planet: string,
    numberCity: number
  }
}

const address: heroProperties["address"] = {
  planet: "Mart",
  numberCity: 201,
}

// Type From value

const Newaddress = {
  planetId: 212,
  planetNew: "Land"
}

type FullAddress = typeof Newaddress

const addreesPractice: FullAddress = {
  planetId: 212,
  planetNew: "Land"
  /// numberUsers: 20 == Errror 🧨
}

//! type from function return /!/
function createNewAddress() {
  return {
    planet: "land",
    city: "Guana"
  }
}

type Address = ReturnType<typeof createNewAddress>

// !Arrays en TypeScript 🤹🏾‍♀️ /!/

// const lenguajes: (string | number)[] = []

// lenguajes.push("Java", "TypeScript" , 20 , 10 , 14)

// !Matrices y tuplas 🪐 /!/

// Example:

/*
[
  ["x" , "o" , "x"]
  ["o" , "x" , "x"]
  ["o" , "x" , "o"]
]
*/

type CellValue = "x" | "o" | ""

// ¿Que es una tupla?
// Las tuplas son arrays con condiciones

type GameBoard = [
  [CellValue , CellValue , CellValue],
  [CellValue , CellValue , CellValue],
  [CellValue , CellValue , CellValue]
]

const gameBoard: GameBoard = [
  ["x" , "o" , "x"],
  ["o" , "x" , "x"],
  ["o" , "x" , "o"]
]

// string[][] == Esto nos indica que es un array y que adentro dentra arrays tambien 🤹🏾‍♀️

// Ejemplo de tuplas #1
// type State = [String , (newName: string) => void]
// const [hero , setHero] = useState("thor")

// Ejemplo de tuplas #2

type RGB = [number , number, number]

const rgb: RGB = [20 , 20 , 2]