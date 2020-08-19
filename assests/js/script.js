let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '30%'
email.style.width = '30%'

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
        }

    function validaEmail(){
        let txtEmail = document.querySelector('#email')
        if(txtEmail.value.indexOf('@') == -1 || email.value.indexOf(".")) {
            txtEmail.innerHTML = "E-mail invalido"
            txtEmail.style.color = "red"
        }  else {
            txtEmail.innerHTML = "E-mail Valido"
            txtEmail.style.color = "green"

        }
        
    }

}


