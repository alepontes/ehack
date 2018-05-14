

let url = window.location.href;
let id_produto = url.substr(url.indexOf('#') + 1, url.length);

carregar();


function carregar() {

    api((conteudo) => {

        console.log("conteudo " + conteudo);

        if (conteudo.length) {
            for (const item of conteudo) {
                add(item);
            }
        } else {
            let url = window.location.href = "./index";
        }//if
    });

}//carregar

function add(item) {

    // console.log("Titullo " + item.titulo)


    document.querySelector("#img").src = item.img;
    document.querySelector("#titulo").innerHTML = item.titulo;
    document.querySelector("#preco").innerHTML = item.preco;
    document.querySelector("#tipo").innerHTML = item.tipo;
    document.querySelector("#descricao").innerHTML = item.descricao;

    console.log("End " + item.endereco);

    let origin = '1374+Av+Paulista+Bela+Vista+São+Paulo+SP+01310+100';
    let destination = item.endereco;

    let link = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBavNN39jfmFEgeBfl71RC1AikNxRgE_ts&origin=${origin}&destination=${destination}&avoid=tolls|highways`;
    let map = document.querySelector("#mapapi");
    map.src = link;

}//carregar


function api(callback) {

    const link = `http://localhost:3000/client/${id_produto}`;

    $.ajax({
        type: "GET",
        url: link,
        success: data => { callback(data) },
        error: data => { callback(data) }
    });

}//api
