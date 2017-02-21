$(document).ready(function() {

    listar(false, "");

})

var imageness = ["images/Barot_Bellingham_tn.jpg", "images/Jonathan_Ferrar_tn.jpg", "images/Hillary_Goldwynn_tn.jpg", "images/Hassum_Harrod_tn.jpg", "images/Jennifer_Jerome_tn.jpg", "images/LaVonne_LaRue_tn.jpg", "images/Constance_Smith_tn.jpg", "images/Riley_Rewington_tn.jpg", "images/Xhou_Ta_tn.jpg"];

function listar(filtrar = false, filtro = "") {
    var items = "";

    $.getJSON("data.json", function(data) {

        $.each(data, function(index, val) {


            if (filtrar) {

                if (val.bio.toLowerCase().includes(filtro.toLowerCase())) {
                    items += "<table id='searchtable'><tr><td  colspan='2'><br><li id='" + "name" + "'>" + val.name + "</li><br>" +
                        "<hr id=" + "linea" + "></td></tr><tr><td><img src=" + imageness[index] + "></td><td><li id='" + "texto" + "'>" + val.shortname + "</li><br>" +
                        "<li id='" + "texto" + "'>" + val.reknown + "</li><br>" +
                        "<li id='" + "texto" + "'>" + val.bio + "</li></td></table<br><br><br>";
                }
            } else {
                items += "<table id='searchtable'><tr><td  colspan='2'><br><li id='" + "name" + "'>" + val.name + "</li><br>" +
                    "<hr id=" + "linea" + "></td></tr><tr><td><img src=" + imageness[index] + "></td><td><li id='" + "texto" + "'>" + val.shortname + "</li><br>" +
                    "<li id='" + "texto" + "'>" + val.reknown + "</li><br>" +
                    "<li id='" + "texto" + "'>" + val.bio + "</li></td></table<br><br><br>";
            }
        });
        $(".my-new-list").empty();
        $(".my-new-list").append(items);
    });

}



$("#search").keyup(function() {
    var username_value = $('#search').val();
    if (username_value == "") {
        listar(false, "");

    } else {
        listar(true, username_value);

    }
})
/*
var 1prueba=document.getElementById('prueba');

$("#search").keyup(function(){
 $("#search").keyup(function(){

})




*/