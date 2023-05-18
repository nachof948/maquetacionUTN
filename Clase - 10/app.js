/* FUNCIONES */
/* Se usa para enbolsar una parte del codigo */
/* Secuencia se lee linea por linea */


//Funciones nombradas
function suma(){
    console.log('Hola soy la funcion suma')
}
/* ETAPAS DE LAS FUNCIONES */
//1-Llamada : Necesito llamar a la funcion para que se ejecute
suma()

//2-Funciones con parametros

//No poner el mismo nombre a la variable y a los parametros de la funcion
let numero1 = 56;
let numero2 = 23;

function sumar(primer_numero, segundo_numero){
    let resultado = primer_numero + segundo_numero;
    console.log(resultado)//79
}

suma(numero1,numero2)

//3- Funciones que retornan un valor

function resta(a,b){
    let resultado= a - b
    return resultado
}
//Las variables que se crean dentro de la funcion solo se pueden usar dentro de la funcion
//Pero las variables que se crean fuera de la funcion si se pueden utilizar en la funcion
resta(numero1, numero2)

/* Asignarle el valor de una funcion a una variable */
let resultadoFinal = resta(numero1, numero2)
console.log(resultadoFinal)//33

//Funcion Flecha
const suma = (a,b) =>{
    let resultado = a + b
    console.log("Soy una funcion flecha")
    return resultado
}
suma()

//EJERCICIOS
/* Defini una funcion puedeVerPelicula que reciba como argumento un numero de edad y un booleano tieneAutorizacion, y retorne true si la persona esta habilitada para ver la pelicula o false si no. */
let puedeVerPelicula = (edad, tieneAutorizacion)=>{
    return edad >= 15 || tieneAutorizacion ? "tiene autorizacion" : "no tiene autorizacion" //En este caso se pone un solo RETURN porque esta todo dentro de una sola linea
    /*     if(edad >= 15 || tieneAutorizacion ){
        return "Tiene autorizacion"
    } else{
        return "no tiene autorizacion"
    } */
    
}

console.log(puedeVerPelicula(14, false))
console.log(puedeVerPelicula(15, false))
console.log(puedeVerPelicula(12, true))

/* Defini una funcion esVocal que tome por parametro un string letra y nos indique si la letra es una vocal */

const esVocal = (letra) =>{
  /*   if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return "es una vocal"
    }else{
        return "no es una vocal"
    } */
    return (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
}
//RETURN analiza las condiciones y entiende de por si, si es verdadero o falso
console.log(esVocal("o"))
console.log(esVocal("e"))
console.log(esVocal("p"))

let tieneMismaLongitud = (a,b) =>{
    /* return a.length === b.length ? `${a} tiene la misma longitud que ${b}` : `${a} no tiene la misma longitud que ${b}` */
    return (a.length === b.length)
}
console.log(tieneMismaLongitud("manzana","manzana"))
console.log(tieneMismaLongitud("manzanas","manzana"))
console.log(tieneMismaLongitud("auto","manzana"))

console.log(sumar([]))

/* Defini una funcion sumar que reciba com un array de numeros y devuelva la suma de ellos */
const sumar = (numeros) =>{
    //Acumulador
    let sumaNumeros = 0;//Inicializamos la variable con un 0
    //Contador
    let contador = 0;
    for(let numero of numeros){
        sumaNumeros += numero
        console.log(sumaNumeros)
        contador++
        console.log(contador)
    }
    return sumaNumeros
}
console.log(sumar([5, 7, 9, 25, 69]))//115

/* Defini una funcion invertirCaso que tome por parametro un string y devuelva un string donde cada letra tiene el caso invertido
 */

const invertirCaso = (letras) =>{
    let acumulador = ""
    for(let letra of letras){
        if(letra.toUpperCase() === letra){
            acumulador += letra.toLowerCase()
        }else{
            acumulador += letra.toUpperCase()
        }
    }
    return acumulador
}
console.log(invertirCaso("feliz cumple"))
console.log(invertirCaso("jAvAsCrIpt"))

/* Defini una funcion multiplicar que reciba como argumentos un numero multiplicador y un array de nuemeros numeros, y que devuelca un array donde cada elemento es el resultado del elemento del primer array (en la misma posicion) multiplicado por el numero ingresado */
const multiplicar = (multiplicador, numeros) =>{
    let newArray = [];
    for(let numero of numeros){
        newArray.push(multiplicador * numero)
    }
    return newArray//SIEMPRE EL RETURN VA FUERA DEL FOR
}
console.log(multiplicar(2, [5, 7, 15, 22, 40]))