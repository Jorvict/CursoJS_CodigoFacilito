/* Los nodos hace referencia a cada etiqueta, puede ser un form, imput, etc */
function $(selector) {
    return document.querySelector(selector);
}

bind_close();

$("#btn").addEventListener("click", function () {
    var input = document.createElement("input");

    // Primer parametro = El atributo que queremos definir
    // Segundo parametro = El valor del atributo
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "Correo");


    input.setAttribute("name", "mails[]");
    /* Un dato interesante sobre como enviar un arreglo de datos al
    servidor, es que en el atributo name, le coloquemos como valor un
    array */

    $("#form").appendChild(input); // Agarra un nodo y lo coloca como hijo al final
    // console.log(input)


    my_alert("Se agregó un nuevo campo");
})

function my_alert(msg) {
    // console.log($("body").children[1]);
    var div = document.createElement("div");
    div.setAttribute("class", "alert"); // Tambien se puede usar Classlist
    div.innerHTML = msg;

    var close = document.createElement("span");
    close.setAttribute("class", "close");
    close.style.float = "right";
    close.innerHTML = "X";
    div.appendChild(close);


    $("body").insertBefore(div, $("body").firstChild);

    bind_close();
}

function bind_close(params) {
    var elements = document.querySelectorAll(".close")
    for (var i = elements.length -1; i >= 0; i--){
        var el = elements[i];
        // console.log(el);
        el.addEventListener("click", function () {
            this.parentNode.style.display = "none";
        })
    }
}

