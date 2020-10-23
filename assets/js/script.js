/*
Contato
*/
let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let assunto = window.document.getElementById('assunto')
let descricao = window.document.getElementById('descricao')
 let nomeOk = false
 let emailOk = false
 let assuntoOk = false
 let descricaoOk = false
 let mapa = window.document.querySelector('#mapa') 
 let face = window.document.querySelector('#face')
 let insta = window.document.querySelector('#insta')
 let linked = window.document.querySelector('#linked')
 let git = window.document.querySelector('#git')
 let whats = window.document.querySelector('#whats')

 //
 let usuario = window.document.getElementById('usuario')
let senha = window.document.getElementById('senha')
/////


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'



function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        let nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = ' green'
        let emailOk = false
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length < 4){
        txtAssunto.innerHTML = 'Assunto Inválido'
        txtAssunto.style.color = 'red'
    }
    else{
        txtAssunto.innerHTML = 'Assunto Válido'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function validaDescricao(){
    let txtDescricao = document.querySelector('#txtDescricao')

    if(descricao.value.length >= 500){
        txtDescricao.innerHTML = 'Limite máximo de caracteres atingido'
        txtDescricao.style.color = 'red'
        txtDescricao.style.display = 'block'
    }
    else{
        txtDescricao.style.display = 'none'
        assuntoOk = true
    }
    
}


function enviarMensagem(){

    if( nomeOk==true && emailOk ==true && assuntoOk ==true && descricaoOk == true){
        alert('Mensagem enviada com sucesso!')
    }
    else{
        alert('Preencha os campos corretamente antes de enviar!')
    }
         
}


function mapaZoom(){
mapa.style.width = '700px'
mapa.style.height = '350px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}


