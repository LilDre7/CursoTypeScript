// ** Encuentra los 2 primeros numeros del array y sumalos 🧨 //

type NUM__ARR = (number | string[])[];

// Definir un arreglo de números
const arrayNumbers: NUM__ARR = [
  1, 3, 4, 5, 315, 35, 315, 3, 5, 35, 3, 2, 42, 37, 73, 8, 988, 76,
];

// Verificar que el arreglo tenga al menos dos elementos
const sumArrNew = (arrayNumbers: any[]) => {
  if (arrayNumbers.length < 2) {
    return "Not Found"
  } else {
    const firstNum = arrayNumbers[0];
    const secondNum = arrayNumbers[1];
    return firstNum + secondNum;
  }
}
console.log(sumArrNew(arrayNumbers))
