let inmuebles = [];

crearTabla(inmuebles);

function Inmueble(titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio, active){
    this.titulo = titulo;
    this.transaccion = transaccion;
    this.descripcion = descripcion;
    this.precio = precio;
    this.num_wc = num_wc;
    this.num_estacionamiento = num_estacionamiento;
    this.num_dormitorio = num_dormitorio;
    this.active = active;

    // Inmueble.prototype.toString = function(){
    //     return `Hola soy ${this.titulo} y tengo ${this.num_dormitorio} dormitorios.`;
    // }
}