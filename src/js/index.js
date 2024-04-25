// objetivo 1 - quando o usuário clicar no botão de mostrar mais dever abrir ps projetos que estão escondindos html

// passo 1 - pegar o botão mostrar mais no jd pra poder verificar quando o usuário clicar em cima dele

// passo 2 - identificar o clique do botão

const botaomostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
console.log(projetosInativos);

botaomostrarprojetos.addEventListener('click',() => {
    // passo 3 - adicionar a classe "ativo" nod projetos escondidos
    mostrarMaisprojetos();
    
    //Objetivo 2 - esconder o botão de mostrar mais
    //passo 1 - pegar o botão e esconder ele
    esconderbotao();
});

function esconderbotao() {
    botaomostrarprojetos.classList.add("remover");
}

function mostrarMaisprojetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
