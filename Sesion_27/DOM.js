/* Los nodos hace referencia a cada etiqueta, puede ser un form, imput, etc */
function $(selector) {
    return document.querySelector(selector);
}

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
})


