// Anuncio.id = getID(array);
// Anuncio.titulo = nuevoAnuncio.titulo;
// Anuncio.transaccion = nuevoAnuncio.transaccion;
// Anuncio.descripcion = nuevoAnuncio.descripcion;
// Anuncio.precio = nuevoAnuncio.precio;
// Anuncio.num_wc = nuevoAnuncio.num_wc;
// Anuncio.num_estacionamiento = nuevoAnuncio.num_estacionamiento;
// Anuncio.num_dormitorio = nuevoAnuncio.num_dormitorio;
// Anuncio.active = "true";

function Anuncio(id, titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio, active) {
    this.id = id;
    this.titulo = titulo;
    this.transaccion = transaccion;
    this.descripcion = descripcion;
    this.precio = precio;
    this.num_wc = num_wc;
    this.num_estacionamiento = num_estacionamiento;
    this.num_dormitorio = num_dormitorio;
    this.active = active;
}