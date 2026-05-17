
const toggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', function () {
    nav.classList.toggle('aberto');
});

const btnTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', function () {
    window.scrollTo(0, 0);
});


const form = document.querySelector('.contato-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeInput     = document.getElementById('nome');
    const emailInput    = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

    limparErros();

    const nomeValido     = validarNome(nomeInput);
    const emailValido    = validarEmail(emailInput);
    const mensagemValida = validarMensagem(mensagemInput);

    if (nomeValido && emailValido && mensagemValida) {
        const dadosEnvio = {
            nome: nomeInput.value.trim(),
            email: emailInput.value.trim(),
            mensagem: mensagemInput.value.trim()
        };

        console.log('Dados a serem enviados:', dadosEnvio);
        form.reset();

        const boxSucesso   = document.getElementById('mensagem-sucesso');
        const textoSucesso = document.getElementById('texto-sucesso');
        textoSucesso.textContent = 'Obrigado por entrar em contato, ' + dadosEnvio.nome + '! Retornarei em breve.';
        boxSucesso.style.display = 'block';

        setTimeout(function () {
            boxSucesso.style.display = 'none';
        }, 4000);
    }
});

function validarNome(input) {
    const valor = input.value.trim();
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/;
    if (!regex.test(valor)) {
        exibirErro(input, 'Nome deve ter pelo menos 3 caracteres e conter apenas letras');
        return false;
    }
    return true;
}

function validarEmail(input) {
    const valor = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(valor)) {
        exibirErro(input, 'Digite um e-mail válido (exemplo@dominio.com)');
        return false;
    }
    return true;
}

function validarMensagem(input) {
    const valor = input.value.trim();
    if (valor.length < 10) {
        exibirErro(input, 'A Mensagem deve ter pelo menos 10 caracteres');
        return false;
    }
    return true;
}

function exibirErro(input, mensagem) {
    input.classList.add('input-erro');
    const erro = document.createElement('p');
    erro.classList.add('mensagem-erro');
    erro.textContent = '⚠ ' + mensagem;
    input.parentElement.appendChild(erro);
}

function limparErros() {
    document.querySelectorAll('.mensagem-erro').forEach(function (e) {
        e.remove();
    });
    form.querySelectorAll('input, textarea').forEach(function (input) {
        input.classList.remove('input-erro');
    });
}