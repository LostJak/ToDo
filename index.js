let lista = ["teste"];

function adicionarElemento()
{
    let elemento = document.getElementById("input-texto").value;

    lista.push(elemento);
    console.log(elemento + "adicionado à lista: " + lista);

}