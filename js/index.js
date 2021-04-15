//se busca el elemento al cual se le quiere añadir un evento
document.querySelector("#registrar-btn").addEventListener("click",() => {
    let nombre = document.querySelector("#nombre-txt").value;

    console.log("Hola Mundo ", nombre);
    alert("Hola Mundo " + nombre);
});