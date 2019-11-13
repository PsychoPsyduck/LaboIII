"use strict";
//npm install -g typescript
//tsc --init
//tsc hello.ts (compila el js)
//tsc -w
let mensaje = true;
mensaje = "Hola!";
console.log(mensaje);
//Array
let vector = [1, 2, 3, 4];
//Tupla
let tupla = [1, "uno"];
//Enum
var Eheroe;
(function (Eheroe) {
    Eheroe[Eheroe["Xmen"] = 0] = "Xmen";
    Eheroe[Eheroe["Avenger"] = 1] = "Avenger";
})(Eheroe || (Eheroe = {}));
console.log("Enum...");
console.log(Eheroe.Avenger);
console.log(Eheroe[1]);
//Funciones
let funcionEnviarMision = function (heroe) {
    return heroe + " enviado";
};
let retorno = funcionEnviarMision("Spiderman");
console.log(retorno);
//Parametros REST
let funcionEnviarMision2 = function (...heroes) {
    for (let i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviado");
    }
};
funcionEnviarMision2("Hulk", "Spiderman", "Cap. America");
//funcion flecha
let funcionEnviarMision3 = (heroe = "Red Skull") => {
    return heroe + " enviado a la mision";
};
console.log(funcionEnviarMision3());
//tipo en el objeto
let flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["corre", "viaje en el tiempo"],
    getNombre() {
        return this.nombre;
    }
};
console.log(flash.getNombre());
let ironman = {
    nombre: "Tony Stank",
    edad: 45,
    getNombre: function () { return this.nombre; }
};
console.log(ironman.getNombre());
let wolverine = {
    nombre: "James",
};
console.log(wolverine.nombre);
//Interface en clases
class Avenger {
    constructor() {
        this.nombre = "Ms. Marvel";
    }
}
class Mutante {
    constructor() {
        this.nombre = "Ciclope";
    }
}
let unAvenger = new Avenger();
let unMutante = new Mutante();
console.log("unAvenger: " + unAvenger.nombre);
console.log("unMutante: " + unMutante.nombre);
let miFuncion;
miFuncion = (num1, num2) => num1 + num2;
console.log(miFuncion(3, 30));
//Clases
class Avenger2 {
    constructor(nombre) {
        this.nombre = "Heroe";
        this.nombre = nombre;
    }
}
let avenger2 = new Avenger2("Vision");
console.log("Clase: " + avenger2.nombre);
//Clase con atrib privado
class Avenger3 {
    constructor(nombre) {
        this._nombre = "un avenger";
        this._edad = 0;
        this.mostrar = () => this._nombre;
        this._nombre = nombre;
    }
    get edad() { return this._edad; }
    set edad(ed) { this._edad = ed; }
}
let avenger3 = new Avenger3("Hawkeye");
console.log("Clases2: " + avenger3.mostrar());
avenger3.edad = 35;
console.log(avenger3);
//Clases con metodos estaticos
class Xmen {
}
Xmen.nombre_de_clase = "Xmen";
console.log("Atributo estatico: " + Xmen.nombre_de_clase);
//Herencia
class AvengerHeredado extends Avenger2 {
}
let ah = new AvengerHeredado("Heredado");
console.log(ah.nombre);
//Herencia2
class AvengerHeredado2 extends Avenger2 {
    constructor(nombre, edad) {
        super(nombre);
        this.edad = 0;
        this.edad = edad;
    }
}
let avengerHeredado2 = new AvengerHeredado2("Heredado2", 44);
console.log("heredado2: " + avengerHeredado2.nombre);
//Namespaces
var Funciones;
(function (Funciones) {
    function f1() {
        console.log("Yo soy F1");
    }
    Funciones.f1 = f1;
    function f2() {
        console.log("Yo soy F2");
    }
    Funciones.f2 = f2;
})(Funciones || (Funciones = {}));
Funciones.f1();
Funciones.f2();
$(function () {
    console.log("ready");
});
/// <reference path="hello.ts" />
let mens = "bye!";
console.log(mens);
//ctrl+c cancela watch 
//# sourceMappingURL=output.js.map