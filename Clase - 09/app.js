/* Estructura repetitiva For Tradicional */
//Se usa cuando sabemos la cantidad de veces que queremos que se ejecute

//for(inicializacion; condicion; incremento o  decremento){
    
//}
for(var i = 1; 1 <= 10; i++){
    console.log(i)
};

/* Scope: alcanze de variables

Hay tres tipos de variables:

var: Se ha dejado de lado
let: Se utiliza
const: Tambien se utiliza

*/

/* Variable constante */
//No se puede modificar su valor
const pi = 3.14;
const iva = 21;

/* Tipo de dato Array */
//Me permite almacenar datos y acceder a ellos a traves de un indice. Se pueden almacenar distintos tipos de datos
//Siempre le debo poner un nombre plural al Array
let miArray = [20, 96, 1,'hola mundo', 'm', true, false,[45, 'buenos aires']];
console.log(miArray[0]);

//Con [] determino el dato que voy a seleccionar.

/* Recorrer o Iterar un array con While o For*/

//While //NO SE UTILIZA PARA RECORRER ARAYS!!!!!
let segundoArray = [20, 96, 1,'hola mundo', 'm', true];
i = 0;
while(i < 6){
    console.log(segundoArray[i])
    i++;
};

//Do-While //TAMPOCO SE UTILIZA

//For ESTE SI SE USA PARA RECORRER UN ARRAY
for(let j = 0; j < 6; j++){
    console.log(miArray[j])
};

let cantidades = miArray.length //ES UNA BUENA PRACTICA PORQUE YA TENES EN UNA VARIABLE LA CANTIDAD DE LOS ELEMENTOS
console.log(cantidades)

for (let j = 0; j < cantidades; j++){
    console.log(miArray[j])
}

// For of (SE USA MUCHO PARA LOS ARRAY)
let objetos = [20, 96, 1,'hola mundo', 'm', true];

for(let objeto of objetos){ //La variable siempre va en singular (objeto)
    console.log(objeto)
};

//PARA RECORRER ARRAY SE USAN LOS DOS FOR. SE USA FOR TRADICIONAL SI QUEREMOS EMPEZAR A RECORRER DE UN INDICE ESPECIFICO. Y FOR OF PARA RECORRER TODO EL ARRAY COMPLETO

/* PROPIEDADES EN JAVASCRIPT */

let mensaje = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum ipsa, quam sed, esse laudantium magni dicta suscipit nulla accusamus obcaecati soluta. Rerum delectus, tempora nulla excepturi itaque saepe reiciendis!'

let cantidad = mensaje.length //Es una propiedad
console.log(cantidad)

let nombre = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum ipsa, quam sed, esse laudantium magni dicta suscipit nulla accusamus obcaecati soluta. Rerum delectus, tempora nulla excepturi itaque saepe reiciendis!'

//METODO charAt()
let resultado = mensaje.charAt(25); //Te da que elemento tenemos en esa posicion
console.log(resultado);//t
//METODO subString();
resultado = mensaje.substring(2);//Te da todo el elemento a partir del numero que le indicamos
console.log(resultado)
resultado = mensaje.substring(2,9);//Te da todo el elemento a partir del numero que le indicamos hasta que el numero que le indicamos final
console.log(resultado)
//METODO indexOf();
resultado = mensaje.indexOf('Lorem');//Posicion donde se encuentra la palabra
console.log(resultado)//0
//METODO toUpperCase();
resultado = mensaje.toUpperCase();//MAYUSCULAS
//METODO toLowerCase()
resultado = mensaje.toLowerCase()//MINUSCULAS


/* OBJETOS EN JAVASCRIPT (CLASES)*/
/* OBJETO O CLASE DATE */
let fecha = new Date();

console.log(fecha.getFullYear())//Metodo(llevan parentesis)
console.log(`La hora actual es: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
console.log(`${fecha.getDate()} / ${fecha.getMonth() + 1} ${fecha.getFullYear()}`)
console.log(`${fecha.getDay()}`);
//Metodo (variable.nombreEnIngles());

/* OBJETO O CLASE MATH(MATEMATICA) Hay que guardarlo en una variable */
let valor = Math.floor(2.7)//2 metodo (Redondea hacia abajo)
valor = Math.round(2.7)//Redondea al mas cercano
valor = Math.random()
valor = Math.random() * 15;//Le indico que va a ir hasta ese numero
console.log(valor)

let valorFinal = Math.round(Math.random()*15)//Para redondear el valor random FORMA CORRECTA