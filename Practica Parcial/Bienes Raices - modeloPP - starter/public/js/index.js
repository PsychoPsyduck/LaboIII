window.addEventListener('load',inicializarManejadores,false);
function inicializarManejadores(){
    let frm = document.forms[0];
    frm.addEventListener('submit',function(e){
        e.preventDefault();
        let  = obtenerMascota(e.target);
        mascotas.push(nuevaMascota);
        document.getElementById('divTabla').innerHTML="";
        document.getElementById("divTabla").appendChild(crearTabla(mascotas));
    })

}
function obtenerMascota(frm){
    let nombre;
    let edad;
    let tipo;
    let desparasitado;
    let vacunado;
    let castrado;
    let alimento;

    for ( elements of frm.elements){
        switch (elements.name){
            case "nombre":
                nombre = elements.value;
                break;
            case "edad":
                edad= parseInt(elements.value);
                break;
            case "tipo":
                if (elements.checked)
                    tipo= elements.value;
                break;
            case "castrado":
                castrado= elements.checked;
                break;
            case "vacunado":
                vacunado= elements.checked;
                break;
            case "desparasitado":
                desparasitado= elements.checked;
                break;
            case "alimento":
                alimento = elements.value;
                break;
        }
    }
    return new Mascota(nombre,edad,tipo,castrado,vacunado,desparasitado,alimento);
 
}