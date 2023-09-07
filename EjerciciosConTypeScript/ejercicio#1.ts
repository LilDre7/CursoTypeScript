// ** Encuentra los 2 primeros numeros del array y sumalos 🧨 //

type NUM__ARR = (number | string[])[];

const arrayNumbers: NUM__ARR = [
  1, 3, 4, 5, 315, 35, 315, 3, 5, 35, 3, 2, 42, 37, 73, 8, 988, 76,
];

const sumTwoFirstNum = (arrayNumbers) => {
  for (let i = 0; i < arrayNumbers; i++) {
    const element = arrayNumbers[i]
    return element
  }
}

console.log(sumTwoFirstNum(arrayNumbers))

  
}