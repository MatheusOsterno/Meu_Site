let altura = 0
let largura = 0
let vidas = 1
let tempo = 10
/////////////////// Logica do nivel do game
let criaZumbiTempo = 1500
let nivel = window.location.search
nivel.replace('?','')
if (nivel === 'Normal'){
    criaZumbiTempo = 1500
}else if (nivel === 'Difícil') {
    criaZumbiTempo = 1000
}else if(nivel === 'Difícil') {
    criaZumbiTempo = 750
}


ajustaTamanhoDoJogo = () => {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaTamanhoDoJogo()
 
//////////////////// Ajustando cronometro

let cronometro = setInterval(() =>{
    tempo -= 1
    
   if(tempo < 0 ){
    clearInterval(cronometro)
    clearInterval(criaZumbi)
    window.location.href = 'vitoria.html'
   }else{
    document.getElementById('cronometro').innerHTML = tempo
   }
},1000)

/////////////////////////// Criar elementos HTML


posicaoRadomica = () =>{

    //remover o mosquito anterior caso exista
    if(document.getElementById('zumbi1')) {
        document.getElementById('zumbi1').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
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