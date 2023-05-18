/* Comentarios en Javascript 
de varias lineas */

//Comentarios en Javascript de una linea
/* Con javascript controlamos la parte interactiva de una pagina web */

//VARIABLES son espacios de memoria donde almaceno un valor
//PALABRAS RESERVADAS solo la puede usar el lenguaje

//Tipos de datos

//Numeros
var numeros = 125;
console.log(numeros)//Es un metodo donde puedo escribir el nombre de la variable
var otroNumero = 96;
var ultimoNumero = 2;

//String
var palabra = "hola";
var palabras = "hola mundo";
console.log(palabras);//Cuando todo el programa esta hecho hay que eliminar el console.log();
var ultimaLetra = "u";

//Booleano
var esCasado = true;
var esNuevo = false;

//Array
var array = [];
//Objetos Literales
var objetosLiterales = {};
//Array de Objetos 
var arrayObjetos = [{}];

/* ===============OPERADORES ARITMETICOS============= */
//suma, resta, division y multiplicacion

//SUMA
var resultado;
var numero1 = 5;
var numero2 = 10;
resultado = numero1 + numero2;
console.log(resultado);//15

//RESTA
resultado = numero1 - numero2;

//DIVISION
resultado = numero1 / numero2;

//MULTIPLICACION
resultado = numero1 * numero2;

// RESTO (Para determinar si el numero es par o impar)
resultado = numero1 % numero2;

/* ===========OPERADORES RELACIONALES================ */
// < menor, > mayor, <= menor igual, >= mayor igual, == igual , === estrictamente igual, !== distinto, = asignacion

/* =======ESTRUCTURA CONDICIONAL SIMPLE (IF)================= */
//Estructura secuencial es decir que la computadora lee linea por linea.
//Estructura condicional simple: true or false
//Una Condicion esta compuesta por 3 elementos (VARIABLE, OPERADOR RELACIONAL, VARIABLE O VALOR)

var edadPermitida = 19;
var edad = 18;

if(edad >= edadPermitida){
    // si esto es verdadero
    console.log("Podes pasar");
}; 

/* =======ESTRUCTURA CONDICIONAL COMPUESTA (IF - ELSE) */

var nombreAlumno = "Micaela"
var notaAlumno = 9;

if(notaAlumno >= 6){
    //Template string se puede colocar textos y variables
    //Comillas invertidas
    console.log(`${nombreAlumno} estas aprobado tenes un nota de ${notaAlumno}`); //Entre las llaves {} podes realizar operaciones aritmeticas
    //Va a servir para REACT!!!
} else{
    console.log(`${nombreAlumno} estas desaprobado tenes un nota de ${notaAlumno}`);
};

//Operador ternario (SE USA MUCHO EN REACT!!!!!!)(ESTE OPERADOR SON BUENAS PRACTICAS)
/* Se usa cuando me encuentro en una condicion compuesta */
//Condicion
(nombreAlumno >= 6)  ?  console.log(`${nombreAlumno} estas aprobado tenes un nota de ${notaAlumno}`) : console.log(`${nombreAlumno} estas desaprobado tenes un nota de ${notaAlumno}`); 

/* ============OPERADORES LOGICOS================ */
/* y ==> && 
   o ==> || 
   invertir el resulado ==> !*/

//Operador && y !
//(5 > 96 && 5 > 0);//false
//!(5 > 96 && 5 > 0);//true

// Operador || (true + false = true)
//(5 > 96 || 5 > 0) // true
/* (5 > 96 || 5 > 9) */ // false

/* =========OPERADOR CORTOCIRCUITO========== */
/* SE USA EN REACT!!! */

/* var avanzar = true; 
if(avanzar){
    console.log("Podes avanzar")
} else{
    console.log("NO podes avanzar")
} */

var avanzar = true; //&&
avanzar && console.log("podes avanzar");//OPERADOR CORTO CIRCUITO (SOLO SE USA CON CONDICION DE TIPO SIMPLE, CUANDO ESTAS EN UNA CONDICION TRUE O FALSE Y SOLO FUNCIONA CUANDO SEA TRUE)

avanzar = false; //||
avanzar || console.log("podes avanzar");

/* ============ESTRUCTURA CONDICIONAL ANIDADA=================== */
var nota1 = 5;
var nota2 = 6;
var nota3 = 7;

//Sacar promedio
var promedio = (nota1+nota2+nota3) / 3;
console.log(promedio)

//aprobado 7
//regular 4
//desaprobadop

if(promedio >= 7){
    console.log("El alumno esta aprobado")
} else{
    if(promedio >= 4){
        console.log("El alumno tiene un regular")
    } else{
        console.log("Alumno desaprobado")
    }
};

/* camelcase = var notaAlumno, snakecase var nota_alumno */


/* ===============ESTRUCTURA SWITCH============ */
/* Se usa si la condicion es igual a cierto valor */

var mensaje = "dog";
/* 
if(mensaje == "cat"){
    console.log("la traduccion es GATO")
}else{
    if(mensaje == "table"){
        console.log("la traduccion es MESA")
    }else{
        if(mensaje == "dog"){
        console.log("la traduccion es PERRO")
        }
        else{
            console.log("no se encontro la traduccion")
        }
    }
}
 */

switch(mensaje){
    case "cat":
                console.log("la traduccion es GATO");
                break;
    case "table":
                console.log("la traduccion es MESA");
                break;
    case "dog":
                console.log("la traduccion es PERRO");
                break;
    default:
        console.log("no se encontro la traduccion");
}

/* ======ESTRUCTURA REPETITIVA WHILE============ */
/* Se va a ejecutar hasta que algo se cumpla */

var x = 1;
while(x <= 10){//Si la condicion es true se ejecuta, cuando la condicion da falso el programa se termina
    
    console.log(`hola esta es la vuelta numero ${x}`)
    x++; //Contador es un tipo especial de variable que se incremente o decrementa
}
