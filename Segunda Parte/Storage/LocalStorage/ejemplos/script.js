function x() {

    localStorage.setItem("anuncios", JSON.stringify([anuncios]));
    // let anuncios = localStorage.getItem("anuncios");
    let anuncios = JSON.parse(localStorage.getItem("anuncios"));
}