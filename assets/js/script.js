/*
Contato
*/
let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let assunto = window.document.getElementById('assunto')
let descricao = window.document.getElementById('descricao')


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
    }
}

function validaDescricao(){
    let txtDescricao = document.querySelector('#txtDescricao')

    if(descricao.value.length > 500){
        txtDescricao.innerHTML = 'Limite máximo de caracteres atingido'
        txtDescricao.style.color = 'red'
    }
    else{
        txtDescricao.innerHTML = ' '
    }
    
}


function enviarMensagem(){
    
        alert('Mensagem enviada!')
    
}



/*
CADASTRO
*/

let emailCad = document.getElementById('emailCad')
let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')

function validaEmailCad(){
    let txtEmailCad = document.querySelector('#txtEmailCad')

    if(emailCad.value.indexOf('@') == -1 || emailCad.value.indexOf('.')== -1 ){
        txtEmailCad.innerHTML = 'E-mail Inválido'
        txtEmailCad.style.color = 'red'
    }
    else{
        txtEmailCad.innerHTML = 'E-mail Válido'
        txtEmailCad.style.color = 'green'
    }
}
