

function selecionarComida(item) {
    const rango = document.querySelector(".prato .selecionado");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
   
    item.classList.add("selecionado");

    let a = document.querySelectorAll('.selecionado').length;
    let b1 = document.querySelector('.botaopedido1');
    if (a == 3){
    b1.classList.remove('display');
    return;
    }
        
    
}


function selecionarBebida(item) {
    const rango = document.querySelector(".bebida .selecionado");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
   
    item.classList.add("selecionado");

    let a = document.querySelectorAll('.selecionado').length;
    let b1 = document.querySelector('.botaopedido1');
    if (a == 3){
    b1.classList.remove('display');
    return;
    }
        
    

}
function selecionarSobremesa(item) {
    const rango = document.querySelector(".sobremesa .selecionado");
    if ( rango !== null){
    rango.classList.remove("selecionado");}

    item.classList.add("selecionado");

    let a = document.querySelectorAll('.selecionado').length;
    let b1 = document.querySelector('.botaopedido1');
    if (a == 3){
    b1.classList.remove('display');
    return;
    }
        
    
}


function fecharpedido(){
    alert("quase lá");

}



