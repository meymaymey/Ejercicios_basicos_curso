
//INTRODUCCION
 
function holamundo(){
    alert("Hola, Mundo!");
}

function holamundoconsole(){
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