// Ejemplos de la parte #1 retomando nuevamente.

type Hero = {
  // Este readonly == no deja que sea cambiado alguna opcion = pero el valor si es mutable
  readonly id?: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  age: number;
  power: string;
  available: boolean;
};

const hero: Hero = {
  // id: crypto.randomUUID,
  name: "Miles Morales",
  age: 21,
  power: "araña",
  available: true,
};

hero.age = 22;
console.log(hero);

// hero.id = 22 == Error porque se trata de cambiar el valor original 🧨🧨

//** Template union types 🤹🏾‍♀️ /*/

function createHero(hero: Hero) {
  const { name, age, power } = hero;

  return {
    id: crypto.randomUUID(),
    name,
    age,
    power,
  };
}

console.log(createHero.length);

type Color = `#${string}`

const hexadecimal: Color = "#fff000"
// const dexadecimal: Color = "000000" ==> eRRor falta #

//! Arrays 🌞 /!/
const lenguajes: string[] = []

lenguajes.push("JavaScript" , "Java" , "TypeScript")
lenguajes.splice(0 , 2)

console.log(lenguajes)

//! 🧨 Tuplas || Importante 🧨 /!/

// 3 en raya 

// Paso #1 🧨 Crear el type de la tupla
type rulesBoard = number | number | number

// Paso #2 🧨 Crear el template de la tupla 
type gameBoard =  [
  [rulesBoard , rulesBoard , rulesBoard],
  [rulesBoard , rulesBoard , rulesBoard],
  [rulesBoard , rulesBoard , rulesBoard],
]

// Paso #3 🧨 Crear tu const o let con el template de la tupla
const newRulesGame: gameBoard = [
  [1 , 2 , 3],
  [2 , 1 , 3],
  [3 , 2 , 1]
]

newRulesGame.filter(x => {
  console.log(x[0] + 1)
})

type RGBA  = number | number

type rulesColor = 212

const Newhexadecimal: rulesColor = 212

type NEWRGBA = readonly [number , number, number]

const black: NEWRGBA = [0 , 1 , 2 ]

// const white: NEWRGBA = ["2" , "3" , "8"]