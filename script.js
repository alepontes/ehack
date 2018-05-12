
carrega();


function carrega() {

    const conteudo = api();
    let itens = '';


    console.log(conteudo)    


    // for (const item of conteudo) {
    //     console.log(item.titulo)
    //     console.log(item.preco)
    // }


    //     if (conteudo) {
    //         for (const item of conteudo) {
    //             itens += `
    //             <div class="item" onclick="">
    //             <img src="${item.img}" alt="">
    //             <p>${item.titulo}</p>
    //             <p>${item.preco}</p>
    //             </div>`
    //         }//for

    //         add(itens);
    //     }
}

function add(item) {
    let vitrine = document.querySelector('.vitrie');
    vitrine = vitrine.innerHTML + item
    resu = document.createElement('');
}


function api(callback) {

    const link = 'http://localhost:3000/client';

    $.ajax({
        type: "GET",
        url: link,
        success: data => { return data },
        error: data => { return data }
    });

}//api