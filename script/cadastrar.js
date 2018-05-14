class Cadastrar {
    constructor(titulo, preco, tipo, descricao, endereco, img) {
        this.titulo = titulo;
        this.preco = preco;
        this.tipo = tipo;
        this.descricao = descricao;
        this.endereco = endereco
        this.img = img;
    }

    post() {

        let data = new FormData();
        data.append("titulo", this.titulo);
        data.append("preco", this.preco);
        data.append("tipo", this.tipo);
        data.append("descricao", this.descricao);
        data.append("endereco", this.endereco);
        data.append("img", this.img);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://localhost:3000/admin");
        xhr.send(data);

    }

    ok() {
        alert("Item Cadastrado");
        window.location.href = "./index.html"
    }
}


function enviar() {

    let cadastrar = new Cadastrar();

    let titulo = document.querySelector("#titulo")
    let preco = document.querySelector("#preco");
    let descricao = document.querySelector("#descricao");
    let tipo_ = document.getElementById("#tipo");
    let tipo = tipo_.options[tipo_.selectedIndex].value;
    let endereco = document.querySelector("#endereco");
    let img = document.querySelector("#img").files[0];

    cadastrar.titulo = titulo.value;
    cadastrar.preco = preco.value;
    cadastrar.tipo = tipo;
    cadastrar.descricao = descricao.value;
    cadastrar.endereco = endereco.value;
    cadastrar.img = img;
    cadastrar.post();
    cadastrar.ok();


    titulo.value = "";
    preco.value = "";
    tipo.value = "";
    endereco.value = "";
    descricao.value = "";
    tipo_ = tipo_.options[0].value;
    // img;

}//enviar

