//botão olho
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

//campo nome
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#label-nome')
let ValidNome = false

//campo usuário
let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#label-usuario')
let ValidUsuario = false

//campo senha
let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#label-senha')
let ValidSenha = false

//campo confirmar senha
let confirmSenha = document.querySelector('#confirmSenha')
let labelconfirmsenha = document.querySelector('#labelconfirmsenha')
let ValidConfirmSenha = false


//campo msg erro ou success
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')



//validação campo nome
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        ValidNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        ValidNome = true
    }
})


//validação campo usuário
usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        ValidUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        ValidUsuario = true
    }
})


//validação campo senha
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        ValidSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        ValidSenha = true
    }
})


//validação campo confirmar senha
confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelconfirmsenha.setAttribute('style', 'color: red')
        labelconfirmsenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        ValidConfirmSenha = false
    } else {
        labelconfirmsenha.setAttribute('style', 'color: green')
        labelconfirmsenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        ValidConfirmSenha = true
    }
})


//Função Para cadastrar
function cadastrar() {
    if (ValidNome && ValidUsuario && ValidSenha && ValidConfirmSenha) {
        //Criar um mini banco de dados dentro de local storage
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value,
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        // mensagem de Cadastrado com Sucesso
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')


        //Criar um delay para conseguir ver a mensagem de cadastrado e mandar para a pagina de inicio!
        setTimeout (() => {
            window.location.href = '../index.html'
        }, 2000)


    } else {
        //Mensagem de Erro, não cadastrado
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}


//Evento de aparecer a senha quando clicar no olho (campo senha)
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute ('type', 'password')
    }
})


//Evento de aparecer a senha quando clicar no olho (campo confirmar senha)
btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute ('type', 'password')
    }
})
