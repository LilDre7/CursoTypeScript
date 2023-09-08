//?? Que hace el metodo typeof ==> Explicacion //
// Lo que hace este metodo es darno el valor que tiene un dato ejemplo:

let myName = "Alvaro Aburto Ocampo"
typeof (myName) //! El resultado va hacer: !"String" - Porque es valor de la let 🧨

let myAge = 20
typeof (myAge) //! El resultado va hacer: !number - Porque es valor de la let  🧨

//?? Que es type Guard ==> Explicacion y un ejemplo //

/*
//****************************************** ⚗️
Un Type Guard en TypeScript es una forma de verificar y afirmar el tipo de una variable en tiempo de ejecución. Ayuda a TypeScript a comprender más específicamente el tipo de una variable cuando la información de tipo no se puede determinar de manera estática.
Type Guard en TypeScript es una herramienta que te permite verificar y afirmar el tipo de una variable en tiempo de ejecución para que TypeScript pueda proporcionar un análisis de tipo más preciso en ese contexto específico, lo que conduce a un código más seguro y menos propenso a errores de tipo.
//******************************************
*/

function esCadena(valor: any): valor is string {
  return typeof valor === "number";
}

let variable: any = 1;

if (esCadena(variable)) {
  // Dentro de este bloque, TypeScript sabe que "variable" es una cadena.
  console.log(variable + 1); // Esto es seguro
} else {
  // Si no pasa la comprobación, TypeScript sigue considerando "variable" como "any".
  console.log("No es una cadena.");
}


//?? Que significa tiempo de ejecucion 🐲 
/*
El "tiempo de ejecución" se refiere al período durante el cual un programa de computadora se está ejecutando o en funcionamiento. Es el momento en el que el software se ejecuta en una computadora y realiza las tareas para las que fue diseñado.

En el contexto de TypeScript y los Type Guards que mencioné en la respuesta anterior, el "tiempo de ejecución" es el momento en el que el programa realmente se está ejecutando y procesando datos. Los Type Guards son útiles en este momento porque permiten verificar y afirmar el tipo de datos en ese momento específico, en contraste con el "tiempo de compilación" en el que TypeScript realiza su análisis estático para encontrar errores de tipo antes de que el programa se ejecute.
*/

//?? Que son las clases y como usarlas //