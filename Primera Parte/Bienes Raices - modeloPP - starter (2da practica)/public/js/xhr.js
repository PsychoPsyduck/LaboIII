function AltaAnuncio(anuncio) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            armarTabla(anuncio);
        }
        else
            divTabla.innerHTML = '';
    }
    xhr.open('POST', 'http://localhost:3000/altaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
}
function BajaAnuncio(anuncio) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            armarTabla(anuncio);
        }
        else
            divTabla.innerHTML = '';
    }
    xhr.open('POST', 'http://localhost:3000/bajaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
}
function ModificacionAnuncio(anuncio) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            armarTabla(anuncio);
        }
        else
            divTabla.innerHTML = '';
    }
    xhr.open('POST', 'http://localhost:3000/modificacionAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
}

function armarTabla(anuncio) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            json = JSON.parse(xhr.responseText);
            divTabla.innerHTML = '';
            divTabla.appendChild(crearTabla(json["data"]));
        }
        else
            divTabla.innerHTML = '';
    }
    xhr.open('POST', 'http://localhost:3000/traerAnuncios', true);
    xhr.send();
}