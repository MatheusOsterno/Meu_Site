let altura = 0
let largura = 0
let vidas = 1

ajustaTamanhoDoJogo = () => {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaTamanhoDoJogo()


/////////////////////////// Criar elementos HTML



posicaoRadomica = () =>{

    //remover o mosquito anterior caso exista
    if(document.getElementById('zumbi1')) {
        document.getElementById('zumbi1').remove()

        if(vidas > 3){
            alert('fim de jogo!')
        }
        document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
        vidas++
    }

    let posicaoX = Math.floor(Math.random() * altura) - 100
    let posicaoY = Math.floor(Math.random() * largura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar elementos HTML
    let zumbi1 = document.createElement('img')
    zumbi1.src = './imagens/zumbi1.png'
    zumbi1.className =  zumbiAleatorio() + ' ' + ladoAleatorio()
    zumbi1.style.left = posicaoX + 'px'
    zumbi1.style.top = posicaoY + "px"
    zumbi1.style.position = 'absolute'
    zumbi1.id = 'zumbi1'
    zumbi1.onclick = function(){
        this.remove()
    }

    document.body.appendChild(zumbi1)

    console.log(ladoAleatorio())
}

zumbiAleatorio = () => {
    let classe =  Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'zumbi1'
        
        case 1:
            return 'zumbi2'
        
        case 2:
            return 'zumbi3'
    }
    console.log(classe)
}

ladoAleatorio = () => {
    let classe =  Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'ladoA'
        
        case 1:
            return 'ladoB'
        
    }
    console.log(classe)
}