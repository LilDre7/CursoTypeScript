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
function saludar({name: string , age: number}) {
  console.log("Hello World")
}
saludar({name: "Lil dree" , age: 20})
