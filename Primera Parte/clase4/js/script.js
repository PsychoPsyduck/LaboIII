function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function(){
        return "Hola, me llamo " + this.nombre;
    }
}

var p1 = new Persona("jose", "alvarez", 21);
var p2 = new Persona("ana", "perez", 21);

//agregar propiedades dinamicamente
//uno de los dos casos

//Persona.prototype.altura;
p1.altura = 1.80;

var x;

function foo(a, b, c){
    console.log(arguments)
}

x = foo;

x(23, 12);
