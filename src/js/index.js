

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{

        const idSelecionado = personagem.attributes.id.value
        
        if(idSelecionado === 'ultron') return
        
        /*
            trocar o personagem selecionado na lista ao passar o mouse por cima
         - inserir classe 'selecionado' no item em hover
         - remover classe 'selecionado' do personagem selecionado anteriormente
        */

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado') 
        personagem.classList.add('selecionado')

        /*
            alterar conteúdo do personagem 1 (lateral esquerda) durante o hover nos personagens da lista
         - substituir nome da imagem na classe 'personagem-jogador-1' com conteúdo da classe 'id' do personagem respectivo da lista
         - substituir classe 'nome' na classe 'personagem-jogador-1' para conteúdo da classe 'data-name' do personagem respectivo da lista
        */

         const imagemJogador1 = document.getElementById('personagem-jogador-1');
         imagemJogador1.src = `./src/images/${idSelecionado}.png`;

         const nomeJogador1 = document.getElementById('nome-jogador-1')
         const nomeSelecionado = personagem.getAttribute('data-name')
         nomeJogador1.innerHTML = nomeSelecionado


    })
})