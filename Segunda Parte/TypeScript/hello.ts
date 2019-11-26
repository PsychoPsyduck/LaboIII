// npm install -g typescript
// tsc --init
// tsc hello.ts (compila el js)
// tsc -w

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

//Parametros REST
let funcionEnviarMision2 = function(...heroes:string[]):void{
    for(let i=0;i<heroes.length;i++){
        console.log(heroes[i] + " enviado");
    }
}

funcionEnviarMision2("Hulk", "Spiderman", "Cap. America");

//funcion flecha
let funcionEnviarMision3 = (heroe:string="Red Skull"):string=>{
    return heroe + " enviado a la mision";
}

console.log(funcionEnviarMision3());

//tipo en el objeto
let flash:{nombre:string, edad:number, poderes:string[], getNombre:()=>string}=
{
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["corre", "viaje en el tiempo"],
    getNombre(){
        return this.nombre;
    }
}
console.log(flash.getNombre());

//tipo personalizado
type Heroe = {
    nombre: string,
    edad: number,
    poderes?: string[],
    getNombre:()=>string
}
let ironman:Heroe = {
    nombre: "Tony Stank",
    edad: 45,
    getNombre:function(){return this.nombre;}

}
console.log(ironman.getNombre());

//Interfaces
interface IHeroe {
    nombre:string,
    poder?:string,
    mostrar?():string
}

let wolverine:IHeroe = {
    nombre: "James",
}
console.log(wolverine.nombre);

//Interface en clases
class Avenger implements IHeroe{
    nombre:string = "Ms. Marvel";
}

class Mutante implements IHeroe{
    nombre:string = "Ciclope";
}

let unAvenger = new Avenger();
let unMutante = new Mutante();

console.log("unAvenger: " + unAvenger.nombre);
console.log("unMutante: " + unMutante.nombre);

//interface en funcion
interface IfuncDosNumeros{
    (num1:number,num2:number):number;
}
let miFuncion:IfuncDosNumeros;
miFuncion = (num1:number,num2:number)=>num1+num2;
console.log(miFuncion(3,30));

//Clases
class Avenger2 implements IHeroe{
    nombre:string = "Heroe"

    constructor(nombre:string){
        this.nombre = nombre;
    }
}

let avenger2 = new Avenger2("Vision")
console.log("Clase: " + avenger2.nombre);

//Clase con atrib privado
class Avenger3{
    private _nombre:string = "un avenger";
    private _edad:number = 0;
    constructor(nombre:string){
        this._nombre = nombre;
    }

    get edad():number{return this._edad;}
    set edad(ed:number){this._edad = ed;}

    public mostrar = ()=>this._nombre;
}

let avenger3 = new Avenger3("Hawkeye");
console.log("Clases2: " + avenger3.mostrar());
avenger3.edad = 35;
console.log(avenger3);

//Clases con metodos estaticos
class Xmen{
    static nombre_de_clase = "Xmen";
}
console.log("Atributo estatico: " + Xmen.nombre_de_clase);

//Herencia
class AvengerHeredado extends Avenger2{

}
let ah = new AvengerHeredado("Heredado");
console.log(ah.nombre);

//Herencia2
class AvengerHeredado2 extends Avenger2{
    edad:number = 0;
    constructor(nombre:string,edad:number){
        super(nombre);
        this.edad = edad;
    }
}
let avengerHeredado2:AvengerHeredado2 = new AvengerHeredado2("Heredado2",44);
console.log("heredado2: " + avengerHeredado2.nombre);

//Namespaces
namespace Funciones{
    export function f1(){
        console.log("Yo soy F1");
    }
    export function f2(){
        console.log("Yo soy F2");
    }
}

Funciones.f1();
Funciones.f2();

// $(function(){
//     console.log("ready");
// })

// npm init
// npm i @types/jquery
// npm i jquery