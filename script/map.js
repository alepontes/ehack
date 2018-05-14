/** 
    // function initialize() {

    //     // Exibir mapa;
    //     var myLatlng = new google.maps.LatLng(-23.5624065, -46.6542724);
    //     var mapOptions = {
    //         zoom: 17,
    //         center: myLatlng,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }

    //     // Exibir o mapa na div #mapa;
    //     var map = new google.maps.Map(document.querySelector(".map"), mapOptions);

    // }

    // // Função para carregamento assíncrono
    // function loadScript() {
    //     const key = 'AIzaSyBavNN39jfmFEgeBfl71RC1AikNxRgE_ts';
    //     var script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = `http://maps.googleapis.com/maps/api/js?key=${key}&sensor=true_or_false&callback=initialize`;

    //     document.body.appendChild(script);
    // }
*/

// window.onload = loadScript;


let origin = '1374+Av+Paulista+Bela+Vista+São+Paulo+SP+01310+100';
let destination = 'jardim+angela';

let link = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBavNN39jfmFEgeBfl71RC1AikNxRgE_ts&origin=${origin}&destination=${destination}&avoid=tolls|highways`

console.log(link);

let a = document.querySelector("#mapapi");
a.src = link;



