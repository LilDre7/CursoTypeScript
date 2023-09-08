//! Fetching de datos en TypeScript ⚔️ //
// Para no tener problema con el await se usa un archivo = mts para solucionar errores 🧨

const API_URL = "https://www.youtube.com/watch?v=L1ZSk-vPVKI&t=2555s"

const response = await fetch(API_URL)

if(!response.ok){
  throw new Error("Request failed")
}

type ApiResponse = {
  items: object[]
}

const data = await response.json() as ApiResponse

const repos = data.items.map(repo => {
  console.log(repo)
})