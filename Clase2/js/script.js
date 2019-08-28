var btnPuntero;
window.addEventListener('load', function() {
    btnPuntero = document.getElementById('Saludar');
    btnPuntero.addEventListener('click', function() {
        console.log("Hola usuario");
    });
});