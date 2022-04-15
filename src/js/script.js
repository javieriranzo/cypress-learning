/* Capítulo variables de texto */

let nombre = "Javier";
let apellidoPaterno = "Iranzo";
let apellidoMaterno = "Rebenaque"
console.log("Nombre: " + nombre + " Apellidos: " + apellidoPaterno + " " + apellidoMaterno);

/* Capítulo variables numéricas */

let datoPrimero = 40;
let datoSegundo = 20;
let reusltadoSuma = datoPrimero + datoSegundo;
let resultadoResta = datoPrimero - datoSegundo;
let resultadoProducto = datoPrimero * datoSegundo;
let resultadoDivision = datoPrimero / datoSegundo;
console.log("El resultado de la suma es: " + reusltadoSuma);
console.log("El resultado de la resta es: " + resultadoResta);
console.log("El resultado del producto es: " + resultadoProducto);
console.log("El resultado de la division es: " + resultadoDivision);

/* Capítulo alerts */

let nombreCompleto = nombre + " " + apellidoPaterno + " " + apellidoMaterno;
alert("El nombre completo es: " + nombreCompleto);

/* Capítulo typeof */

typeof nombreCompleto; // Devuelve el tipo de variable que es nombreCompleto
typeof reusltadoSuma; // Devuelve el tipo de variable que es resultadoSuma

/* Capítulo objetos */

let objetoPersona1 = {
    nombrePersona1: "Javier",
    apellidoPaternoPersona1: "Iranzo",
    apellidoMaternoPersona1: "Rebenaque"
};

let objetoPersona2 = {
    nombrePersona2: "Natalia",
    apellidoPaternoPersona2: "Sastre",
    apellidoMaternoPersona2: "Crespo"
};

console.log("La persona 1 es: " + objetoPersona1.apellidoPaternoPersona1 + " " + objetoPersona1.apellidoMaternoPersona1 + ", " + objetoPersona1.nombrePersona1);
console.log("La persona 2 es: " + objetoPersona2.apellidoPaternoPersona2 + " " + objetoPersona2.apellidoMaternoPersona2 + ", " + objetoPersona2.nombrePersona2)