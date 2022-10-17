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
let z8 = 0;
let total = 0;


function selecionarComida(item) {
    const rango = document.querySelector(".prato .selecionado");
    const seta1 = document.querySelector(".doprato.setaon");
    if ( rango !== null){
    rango.classList.remove("selecionado");
   }
    if ( seta1 !== null){
    seta1.classList.remove('setaon');
    }
    item.classList.add("selecionado");
    preco1 = item.querySelector('.preco');
    prato1 = item.querySelector('.p1');
    const seta = item.querySelector(".check");
    seta.classList.add("setaon");

    let a = document.querySelectorAll('.selecionado').length;
    let b1 = document.querySelector('.botaopedido1');
    
    if (a == 3){
    b1.classList.remove('display');
    return;
    }
        
    
}


function selecionarBebida(item) {
    const rango = document.querySelector(".bebida .selecionado");
    const seta1 = document.querySelector(".dabebida.setaon");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
    if ( seta1 !== null){
    seta1.classList.remove('setaon');
    }
   
    item.classList.add("selecionado");
    preco2 = item.querySelector('.preco');
    bebida1 = item.querySelector('.p1');
    const seta = item.querySelector(".check");
    seta.classList.add("setaon");

    let a = document.querySelectorAll('.selecionado').length;
    let b1 = document.querySelector('.botaopedido1');
    
    if (a == 3){
    b1.classList.remove('display');
    return;
    }
        
    

}
function selecionarSobremesa(item) {
    const rango = document.querySelector(".sobremesa .selecionado");
    const seta1 = document.querySelector(".dasobremesa.setaon");
    if ( rango !== null){
    rango.classList.remove("selecionado");}
    if ( seta1 !== null){
    seta1.classList.remove('setaon');
        }

    item.classList.add("selecionado");
    preco3 = item.querySelector('.preco');
    sobremesa1 = item.querySelector('.p1');
    const seta = item.querySelector(".check");
    seta.classList.add("setaon");

    let a = document.querySelectorAll('.selecionado').length;
    let b1 = document.querySelector('.botaopedido1');
    
    if (a == 3){
    b1.classList.remove('display');
    return;
    }
        
    
}


function fecharpedido(){
    total = Number(preco1.innerHTML) + Number(preco2.innerHTML) + Number(preco3.innerHTML);
    total = total.toFixed(2)//.replace('.', ',');
    
    
    const z1 = document.querySelector(".z1")
    const z2 = document.querySelector(".z2")
    const z3 = document.querySelector(".z3")
    const z4 = document.querySelector(".z4")
    const z5 = document.querySelector(".z5")
    const z6 = document.querySelector(".z6")
    const z7 = document.querySelector(".z7")
    z1.innerHTML = prato1.innerHTML;
    z2.innerHTML = preco1.innerHTML;
    z3.innerHTML = bebida1.innerHTML;
    z4.innerHTML = preco2.innerHTML;
    z5.innerHTML = sobremesa1.innerHTML;
    z6.innerHTML = preco3.innerHTML;
    z7.innerHTML = "R$ " + total;
    z8 = document.querySelector(".revpedido");
    z8.classList.add('display');
    
    return;

}
function fecharpedido2() {
    nomeclient = prompt("Qual o seu nome?")
    endclient = prompt("Qual o seu endereço?")
    mensagem = "Olá, gostaria de fazer o pedido:\n"  + "- Prato: " + prato1.innerHTML + "\n- Bebida: " + bebida1.innerHTML +"\n- Sobremesa: " + sobremesa1.innerHTML +"\nTotal: R$ " +total  +  "\n\nNome: " +nomeclient +  "\nEndereço: " + endclient;
    alert(mensagem)
    mensagemwpp = encodeURIComponent(mensagem);
    linkwpp += mensagemwpp;
    //window.location.replace(linkwpp);


} 
function cancelar() {

    z8.classList.remove('display');
}


/*

const z1 = document.querySelector(".z1")
const z2 = document.querySelector(".z2")
const z3 = document.querySelector(".z3")
const z4 = document.querySelector(".z4")
const z5 = document.querySelector(".z5")
const z6 = document.querySelector(".z6")
const z7 = document.querySelector(".z7")
z1.innerHTML = prato1;
z2.innerHTML = preco1;
z3.innerHTML = bebida1;
z4.innerHTML = preco2;
z5.innerHTML = sobremesa1;
z6.innerHTML = preco3;
z7.innerHTML = "R$ " + total;

*/
