var botonAlta;
var botonBaja;
var botonModificacion;
var botonCancelar;
var divTabla;

window.addEventListener('load', inicializarManejadores, false);

function inicializarManejadores() {
    let frm = document.forms[0];
    botonAlta = document.getElementsById('btnAlta');
    botonBaja = document.getElementsById('btnBaja');
    botonModificacion = document.getElementsById('btnModificacion');
    botonCancelar = document.getElementsById('btnCancelar');


    botonAlta.addEventListener('click', function(e) {
        let nuevoAnuncio = ObtenerAnuncio(frm);
        AltaAnuncio(nuevoAnuncio);
    })
    botonBaja.addEventListener('click', function(e) {
        let nuevoAnuncio = ObtenerAnuncio(frm);
        BajaAnuncio(nuevoAnuncio);
    })
    botonModificacion.addEventListener('click', function(e) {
        let nuevoAnuncio = ObtenerAnuncio(frm);
        ModificacionAnuncio(nuevoAnuncio);
    })
    botonCancelar.addEventListener('click', function(e) {
        let nuevoAnuncio = ObtenerAnuncio(frm);
        CancelarAnuncio(nuevoAnuncio);
    })
    
}