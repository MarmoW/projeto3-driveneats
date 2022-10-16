let preco1 = 0;
let preco2 = 0;
let preco3 = 0;
let prato1 = 0;
let bebida1 = 0;
let sobremesa1 = 0;
let endclient = 0;
let nomeclient = 0;
let mensagem = 0;
let mensagemwpp = 0;
let linkwpp = "https://wa.me/?text="

function selecionarComida(item) {
    const rango = document.querySelector(".prato .selecionado");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
   
    item.classList.add("selecionado");
    preco1 = item.querySelector('.preco');
    prato1 = item.querySelector('.p1');
        
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
    preco2 = item.querySelector('.preco');
    bebida1 = item.querySelector('.p1');
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
    preco3 = item.querySelector('.preco');
    sobremesa1 = item.querySelector('.p1');
    let a = document.querySelectorAll('.selecionado').length;
    let b1 = document.querySelector('.botaopedido1');
    
    if (a == 3){
    b1.classList.remove('display');
    return;
    }
        
    
}


function fecharpedido(){
    let total = 0;
    total = Number(preco1.innerHTML) + Number(preco2.innerHTML) + Number(preco3.innerHTML);
    total = total.toFixed(2);
    
    nomeclient = prompt("Qual o seu nome?")
    endclient = prompt("Qual o seu endereço?")
    mensagem = "Olá, gostaria de fazer o pedido:\n"  + "- Prato: " + prato1.innerHTML + "\n- Bebida: " + bebida1.innerHTML +"\n- Sobremesa: " + sobremesa1.innerHTML +"\nTotal: R$" +total  +  "\n\nNome: " +nomeclient +  "\nEndereço: " + endclient;
    alert(mensagem)
    mensagemwpp = encodeURIComponent(mensagem);
    linkwpp += mensagemwpp;
    //window.location.replace(linkwpp);
    return;

}



