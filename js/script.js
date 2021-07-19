const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados ={
        nome,
        email,
    }

    let converteDados = JSON.stringify(dados);
    localStorage.setItem('lead', converteDados)
    
    let conteudo = document.getElementById('conteudo')
    let carregando = `<div class="formularioCarregado"><p> Carregando...</p>
    </div>`
    let pronto = `<div class="formularioCarregado"><p>Obrigado por se cadastrar! Você receberá um email com todas 
    as informações em instantes!</p>
    </div>`

    
    let titulo = document.getElementById('titulo')
    titulo.parentNode.removeChild(titulo);

    conteudo.innerHTML = carregando

    setTimeout(() =>{
        conteudo.innerHTML = pronto
    }, 2000) 
})