window.addEventListener('load', ()=>{
    document.forms[0].addEventListener('submit', enviarDatos)
})

function enviarDatos(e) {

    e.preventDefault();

    let data = getData(e.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        //aca va el codigo que maneja la peticion
        
        let info = document.getElementById('info');

        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                setTimeout(() => {
                    info.innerHTML = xhr.responseText;
                    

                    //si tarda mas tiempo del que puede, para que no cuelgue v
                    clearTimeout(tiempo);
                }, 3000);
            }
            else {
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
        else {
            info.innerHTML = '<img src="./images/spinner.gif" alt="spinner" />';
        }
    }

    xhr.open('POST', './servidor.php', true);
    xhr.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');
    xhr.send(data);

    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'Servidor ocupado. Intente mas tarde';
    }, 10000);
}

function getData( form ) {
    let nombre = form.nombre.value;
    let apellido = form.apellido.value;

    return `nombre=${nombre}&apellido=${apellido}`;
}