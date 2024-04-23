// este es un comentario de una sola linea 
/*espero poder mejorar
y foratlecer mis conocimientos
 con java script */
 
 //ejercicio 5
const miNumero = 10;
console.log(miNumero);

//ejercicio 6
let miBooleano = true;
console.log(typeof miBooleano);

//ejercicio 7
let miCadena = "Hello World";
console.log(miCadena.length)


//ejercicio 8
const miArray =["Hola Mundo", 123, [1,2]]
console.log(miArray)

//ejercicio 9
const miObjeto = {
    name:'camilo',
    age:24,
    bool:true,
}
console.log(miObjeto)

//ejercicio 10
let nombreUsuario = prompt("Por favor ingrese su nombre: ")
alert(`hola ${nombreUsuario}`)
alert("hola " + nombreUsuario)

//ejercicio 11
let likeJs = confirm("Te gusta JavaScript.")
if (likeJs == true){
    console.log("A el Usuario le gusta JavaScript")
}
else{
    console.log("Al usuario no le gusta JavaScript.")
}

//ejercicio 12
console.warn("Esto es solo practica")

//ejercicio 13
console.error("hay un error de operaciones")

//ejercicio 14
console.table([1, 2, 3, 4, 5])