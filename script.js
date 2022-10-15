
function selecionarComida(item) {
    const rango = document.querySelector(".prato .selecionado");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
   
    item.classList.add("selecionado");
    

}
function selecionarBebida(item) {
    const rango = document.querySelector(".bebida .selecionado");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
   
    item.classList.add("selecionado");
    

}
function selecionarSobremesa(item) {
    const rango = document.querySelector(".sobremesa .selecionado");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
   
    item.classList.add("selecionado");
    

}
