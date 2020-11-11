console.log('[Danib0y] Flappy Bird');
const sprites = new Image();
sprites.src = './sprites.png';
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext ('2d');


// [Plano de Fundo]
const planoDeFundo = {
    spriteX:390,
    spriteY:0,
    largura:275,
    altura: 204,
    x:0,
    y: canvas.height - 204,
    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect (0,0, canvas.width, canvas.height)
        
        contexto.drawImage (
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,

        );

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX,planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        )
     }
}
// [chao]
const chao = {
    spritex:0,
    spriteY:610,
    largura: 224,
    altura: 112,
    x:0,
    y: canvas.height -112,
    desenha() {
        contexto.drawImage (
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );

        contexto.drawImages (
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,

        );
    },
};
const flappyird = {
    spriteX: 0,
    spriteY:0,
    largura:33,
    altura:24,
    x:10,
    y:50,
    gravidade : 0.25,
    velocidade:0,
    atualiza(){
        flappyBird.velocidade = flappyBird.velocidade+ flappyBird.gravidade; 
        flappyBird.y = flappyBird.y +1;
    },
    desenha() {
        contexto.drawImage(
            sprites,
            flappybird.spriteX, flappyBird.spriteY,//sprite x e y
            flappyBird.largura, flappyBird.altura, //tamanho do recorte na sprite
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
}
///[mensagemGetReady]
const mensagemgetReady = {
    sX: 134,
    sY: 0,
    w: 174,
    h:152,
    x: (canvas.width / 2) - 174 / 2,
    y:50,
    desenha (){
        contexto.drawImage(
            sprites,
            mensagemGetReady.sX , mensagemGetReady.sY,
            mensagemGetReady.w , mensagemGetReady.h,
            mensagemGetReady.x , mensagemGetReady.y,
            mensagemGetReady.w , mensagemGetReady.h,
        );
    }
}
//[Telas]
let telaAtiva = {};
function mudaPararTela(novaTela) {
    telaAtiva = novaTela;
}
const Telas = {
    INICIO: {
        desenha() {
            planoDeFundo.desenha();
            chao.desenha();
            flappyBird.desenha();
            mensagemGetReady.desenha();     
        },
        click() {
            mudaPararTela(Telas.JOGO);
        },
        
        atualiza() {

      }
    }
}


Telas.JOGO = {
    desenha(){
    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();
    },
    atualiza() {
        flappyBird.atualiza();

    }
};




function loop() {
     telaAtiva.desenha();
     telaAtiva.atualiza();
     requestAnimationFrame(loop);

}

mudaPararTela(Telas.INICIO);
 loop();