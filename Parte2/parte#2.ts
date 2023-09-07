//! ENUMS 🐲 /!/

function mostrarMensajes(tipoDeError){
  if(tipoDeError === "notFound"){
    console.log("No se encuentra el recurso")
  }else if(tipoDeError === "unauthorized"){
    console.log("No tienes permisos para acceder")
  }else if(tipoDeError === "forbidden"){
    console.log("No tienes permiso para acceder")
  }
}