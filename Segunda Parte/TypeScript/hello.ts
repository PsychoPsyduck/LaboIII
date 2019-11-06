//npm install -g typescript
//tsc --init
//tsc hello.ts (compila el js)
//tsc -w

let mensaje:string | number | boolean = true;
mensaje = "Hola!";
console.log(mensaje);

//Array
let vector:number[] = [1,2,3,4];

//Tupla
let tupla:[number,string] = [1,"uno"];

//Enum
enum Eheroe {
    Xmen,
    Avenger
}
console.log("Enum...");
console.log(Eheroe.Avenger);
console.log(Eheroe[1]);

//Funciones
let funcionEnviarMision = function(heroe:string):string{
    return heroe + " enviado";
}

let retorno:string = funcionEnviarMision("Spiderman");
console.log(retorno);
