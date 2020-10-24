
let usuarioCad = window.document.getElementById('usuarioCad')
let senhaCad = window.document.getElementById('senhaCad')
let nomeCad = window.document.getElementById('nomeCad')
let emailCad = window.document.getElementById('emailCad')
let usuarioOk = false
let senhaOk = false
let nomeOk = false
let emailOk = false




usuarioCad.style.width = '100%'
senhaCad.style.width = '100%'
nomeCad.style.width = '100%'
emailCad.style.width = '100%'

function validaUsuarioCad(){
    let txtUsuarioCad = document.querySelector('#txtUsuarioCad')

    if(usuarioCad.value.length < 3){
        txtUsuarioCad.innerHTML = 'Usuário Inválido'
        txtUsuarioCad.style.color = 'red'
    }
    else{
        txtUsuarioCad.innerHTML = 'Usuário Válido'
        txtUsuarioCad.style.color = 'green'
        usuarioOk = true
    }
}

function validaSenhaCad(){
    let txtSenhaCad = document.querySelector('#txtSenhaCad')

    if(senhaCad.value.length < 8 ){
        txtSenhaCad.innerHTML = 'A senha deve ter no minimo 8 caracteres'
        txtSenhaCad.style.color = 'red'
    }
    else{
        txtSenhaCad.innerHTML = 'Senha Válida'
        txtSenhaCad.style.color = 'green'
        senhaOk = true
    }
}

function validaNomeCad(){
    let txtNomeCad = document.querySelector('#txtNomeCad')

    if(nomeCad.value.length < 3){
        txtNomeCad.innerHTML = 'Nome C Inválido'
        txtNomeCad.style.color = 'red'
    }
    else{
        txtNomeCad.innerHTML = 'Nome Válido'
        txtNomeCad.style.color = 'green'
        nomeOk = true
    }
}

function validaEmailCad(){
    let txtEmailCad = document.querySelector('#txtEmailCad')

    if(emailCad.value.indexOf('@') == -1 || emailCad.value.indexOf('.') == -1){
        txtEmailCad.innerHTML = 'E-mail Inválido'
        txtEmailCad.style.color = 'red'
    }
    else{
        txtEmailCad.innerHTML = 'E-mail Válido'
        txtEmailCad.style.color = ' green'
        emailOk = true
    }
}

function criarConta(){

    if( nomeOk==true && emailOk ==true && senhaOk ==true && usuariooOk == true){
        alert('Conta criada com sucesso!')
    }
    else{
        alert('Preencha os campos corretamente antes de criar a conta!')
    } 
}


function newPopup(){
    let video = window.open('popup.html', 'popup')
}