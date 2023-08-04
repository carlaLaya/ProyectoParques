console.log("hola" + " " + "don" + " " + "pepito")
console.log("30+20")
console.log(30+20)
let numero=200;
console.log(numero+5)
let descuento=numero*0.5
console.log(numero+200)
let suma=7+9;
console.log(suma/2)
console.log(suma+10+5-2)
console.log(50>20)
let letrasNombre1="Carla";
let letrasNombre2="Santiago";
console.log(letrasNombre1.length)
console.log(letrasNombre1.length > letrasNombre2.length);
// doble == compara el valor y el === compara el valor y el dato//
let edad=19;
console.log(edad<20=== true);
//distinto != ; es como decir NO.  no es igual a...//
let carrito=0;
console.log(carrito+1);
//let edadUsuario = "18";
//let adultoResponsable = true;
//console.log(edadUsuario < 18)

 let usuarioRegistrado1="JuanPerez";
 let passwordRegistrada="Usuario123";

 let usuarioIngresado= "JuanPerez";
 let passwordIngresada= "Usuario123";
 console.log(usuarioIngresado === usuarioRegistrado1 && passwordIngresada === passwordIngresada);
 let edadUsuario =14;
 let chaperon =true;
 console.log(edadUsuario >=16 || chaperon === true ) // que se cumplan todas o una
 //condicionales if y else
 let horarios=8;
 if(horarios > 9){
    console.log("entonces me tengo que levantar")
 }
 else{
    console.log("podes seguir durmiendo")
 }
//a traves de estos valores, aplico una accion a realizar. Key= expresion case=valor (se puede resolver con swichi o con if y else)
let diaDeLaSemana="jueves";
switch (diaDeLaSemana) {
    case "lunes":
        console.log("me pinto de rojo");
        
        break;
    case "martes":
        console.log("me pinto de verde");
            
        break;
    case "miercoles":
        console.log("me pinto de negro");
                    
        break;
    default:
        console.log("Entonces no me pinto las uñas");
        break;
}
const alumnos=["julieta","carlos"];
alumnos.push("carla nuevo")
alumnos.unshift("carla")
console.log(alumnos);
prompt("Cuantos años tenes"?);




