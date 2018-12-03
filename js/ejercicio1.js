
//INTRODUCCION
 
function holaMundo(){
    alert("Hola, Mundo!");
}

function holaMundoConsole(){
    console.log("Hola Mundo!");
}
//VARIABLES
function nombre(){
var nombre = "Mey";
var apellido = "Moreno";
document.getElementById("nombre").innerHTML = nombre + " " + apellido;
}

//Esto es un comentario

/*esto es un comentario
pero con dos lines*/

//FUNCIONES
function suma(){
    var x = 7;
    var y = 6;
    var z = 5;
    document.getElementById("suma").innerHTML = x+y*z;
    }

function potencia(){
    var p = 1;
    p%=5;
    document.getElementById("potencia").innerHTML = ("El valor de p es " +p);
}

function gradosFahrenheit(){
    var m = 32;

    document.getElementById("gradosFahrenheit").innerHTML = ("El valor en Grados es " +(m-32)*5/9);
}
//CADENAS DE TEXTO
function cadenaTexto(){
    var frase = "Yo amo a mi perro";
    frase2= frase.replace("perro","gato");

    document.getElementById("cadenaTexto").innerHTML = frase2;
}

function mayusculas(){
    cadena= "hola";
    cadena =cadena.toUpperCase();
    document.getElementById("mayusculas").innerHTML = cadena;
}

//ARRAYS

function diasSemana(){
    var meses = new Array
    ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre",
    "Octubre","Noviembbre","Diciembre");
    var diasSemana= new
    Array ("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
    var f =new Date();
    document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " 
    + meses[f.getMonth()] + " de " + f.getFullYear());
}

/*1. Crear un programa donde podamos introducir una hora y comprobandola con las 12 del 
mediodía nos indique si son buenos días o buenas tardes.*/

function horaBdias(){
   var hora = new Date().getHours();
   var saludo;
   if (hora < 13){
       saludo = "Buenos días";
   } else {
       saludo= "Buenas tardes";
   }
   document.getElementById("horaBdias").innerHTML = saludo;
}

//2. Hacer un programa que nos diga el día de la semana en el que nos encontramos

function diaSemana(){
    var day;
    switch (new Date().getDay()){
        case 0:
            day = "Domingo";
            break;
        case 1:
            day = "Lunes";
            break;
        case 2:
            day= "Martes";
            break;
        case 3:
            day= "Miercoles";
            break;
        case 4:
            day = "Jueves";
            break;
        case 5:
            day = "Viernes";
            break;
        case 6:
            day = "Sabado";
    }
    document.getElementById("diaSemana").innerHTML = "Hoy es " +day; 
}

//3. Hacer un programa en el que podamos introducir una nota y según ésta nos diga si está aprobado o no.
/* 4. Hacer un programa similar al anterior pero que además nos diga si está suspendo, aprobado, notable, 
sobresaliente o matrícula de honor.*/

function nota(){
    var nota = 10;
        var mensaje = " ";
        switch (nota){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                mensaje = "Suspenso";
                break;
            case 5:
                mensaje ="Suficiente";
                break;
            case 6:
                mensaje ="Bien";
                break;
            case 7:
            case 8:
                mensaje= "Notable";
                break;
            case 9:
                mensaje ="Sobresaliente";
                break;
            default:
                mensaje = "El calor no es valido";
        }    
                document.getElementById("diaSemana").innerHTML = "Ha sacado un " +nota; 
}

//5. Hacer un programa que nos muestre todos los días de la semana.

function semanaDias(){
    var i="Domingo";
    var j="Lunes";
    var k ="Martes";
    var l="Miercoles";
    var m="Jueves";
    var n="Viernes";
    var o="Sábado";
        alert(i);
        alert(j);
        alert(k);
        alert(l);
        alert(m);
        alert(n);
        alert(o);
    }
//6. Hacer un programa que nos muestre los 100 primeros números.

function numeros(){
    var text,x;
    var text = "";
    x=0;
        while (x <=100){ 
            text += +x;
            x++;
        }
        
    document.getElementById("numeros").innerHTML = text;
    
}

