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
/// <reference path="hello.ts" />
let mens = "bye!";
console.log(mens);
//ctrl+c cancela watch
//# sourceMappingURL=output.js.map