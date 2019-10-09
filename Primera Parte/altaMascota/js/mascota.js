
let mascotas = [];


crearTabla(mascotas);

function Mascota(nombre, edad, tipo, castrado, vacunado, desparacitado, alimento){
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
    this.castrado = castrado;
    this.vacunado = vacunado;
    this.desparacitado = desparacitado;
    this.alimento = alimento;

    Mascota.prototype.toString = function(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años humanos.`;
    }
}

// let m1 = new Mascota("Gato", 5, "gato", true, false, true, "carne")

// console.log(m1.toString());

