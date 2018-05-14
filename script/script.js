
carregar();


function carregar() {


    api((conteudo) => {

        console.log(conteudo);

        if (conteudo.length) {
            for (const item of conteudo) {
                add(item);
            }
        } else {
            let vitrine = document.querySelector(".vitrine");
            let p = document.createElement("p");
            p.classList = "nada"
            p.innerHTML = 'Nada para mostrar, clique<a href="./vender.html"> aqui </a>para cadastrar itens';
            vitrine.appendChild(p);
        }//if
    });

}//carregar

function add(item) {


    let div = document.createElement("div");
    let txt = document.createElement("div");
    let img = document.createElement("img");
    let titulo = document.createElement("p");
    let preco = document.createElement("p");
    let descricao = document.createElement("p");


    div.className = "item grade";
    div.onclick = click;
    txt.className = "txt";

    img.src = item.img;
    titulo.className = "titulo";
    preco.className = "preco";
    descricao.className = "descricao";

    titulo.innerHTML = item.titulo;
    preco.innerHTML = `R$ ${item.preco}`;
    descricao.innerHTML = item.descricao;

    txt.appendChild(titulo);
    txt.appendChild(preco);
    txt.appendChild(descricao);
    div.appendChild(img);
    div.appendChild(txt);

    let vitrine = document.querySelector('.vitrine');
    vitrine.appendChild(div);

    function max(stg, max) {

        max = max ? max : 20;

        if (stg.length > 20)
            return stg.substring(0, 20).concat("...")
    }


    function click() {
        //ABRIR PAGINA
        window.location.href = `./produto.html#${item._id}`;
    }

}//carregar


function api(callback) {

    const link = 'http://localhost:3000/client';

    $.ajax({
        type: "GET",
        url: link,
        success: data => { callback(data) },
        error: data => { callback(data) }
    });

}//api

function btn_grid() {

    let btn_g = document.querySelector("#btn_grid_black");
    let btn_l = document.querySelector("#btn_list_blue");

    btn_g.id = "btn_grid_blue";
    btn_l.id = "btn_list_black";
    let itens = document.querySelectorAll(".item");
    itens.forEach((item) => item.className = "item grade");
}

function btn_list() {

    let btn_g = document.querySelector("#btn_grid_blue");
    let btn_l = document.querySelector("#btn_list_black");


    btn_g.id = "btn_grid_black";
    btn_l.id = "btn_list_blue";
    let itens = document.querySelectorAll(".item");
    itens.forEach((item) => item.className = "item lista");
}


let a 



let tipo_ = document.querySelector(".list");
let tipo = tipo_.options[tipo_.selectedIndex].value;

a.sele
