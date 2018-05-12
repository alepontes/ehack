
carrega();


function carrega() {

    let itens = '';

    api((conteudo) => {
        for (const item of conteudo) {
            if (conteudo) {
                for (const item of conteudo) {
                    add(item);
                }//for
            }
        }
    })

}

function add(item) {


    let div = document.createElement("div");
    let img = document.createElement("img");
    let titulo = document.createElement("p");
    let preco = document.createElement("p");

    div.className = "item";
    img.src = item.img;
    titulo.innerHTML = item.titulo;
    preco.innerHTML = item.preco;

    div.appendChild(img);
    div.appendChild(titulo);
    div.appendChild(preco);

    let vitrine = document.querySelector('.vitrine');
    vitrine.appendChild(div);

}


function api(callback) {

    const link = 'http://localhost:3000/client';

    $.ajax({
        type: "GET",
        url: link,
        success: data => { callback(data) },
        error: data => { return data }
    });

}//api