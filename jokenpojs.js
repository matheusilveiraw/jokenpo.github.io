//@author Matheus Silveira
//Data de criação: 08/04/2020
//Última Att: 09/04/2020
var partida = 0;
var tesoura = false;
var pedra = false;
var papel = false;

function pedraTurnRdy() { 
    document.getElementsByClassName("pedra")[0].src="pedrardy.jpg";
    //muda imagem para imagem selecionada

    document.getElementsByClassName("tesoura")[0].src="tesoura.jpg";
    document.getElementsByClassName("papel")[0].src="papel.jpg";

    tesoura = false;
    pedra = true;
    papel = false;
}

function tesouraTurnRdy() { 
    document.getElementsByClassName("tesoura")[0].src="tesourardy.jpg";

    document.getElementsByClassName("pedra")[0].src="pedra.jpg";
    document.getElementsByClassName("papel")[0].src="papel.jpg";

    tesoura = true;
    pedra = false;
    papel = false;
}

function papelTurnRdy() { 
    document.getElementsByClassName("papel")[0].src="papelrdy.jpg";

    document.getElementsByClassName("pedra")[0].src="pedra.jpg";
    document.getElementsByClassName("tesoura")[0].src="tesoura.jpg";

    tesoura = false;
    pedra = false;
    papel = true;
}

function jogada() { 
    //0 = pedra
    //1 = tesoura
    //2 = papel
    if(tesoura == false && pedra == false && papel == false) { 
        alert('Escolha uma das opções!')
    } else { 

    partida++;
    if (partida == 1) { //vai verificar se é a partida 1 e se for, vai escrever histórico
        var title = document.createElement("h1");
        title.appendChild(document.createTextNode('Resultado'))
    
        var historicoDiv = document.getElementById('historico');
        historicoDiv.appendChild(title)

        var subtitle = document.createElement('h4')
            //var subtitleString = document.createTextNode('Humano X Máquina')
        subtitle.appendChild(document.createTextNode('Humano X Máquina'))
        historicoDiv.appendChild(subtitle)  
        }

    var resMaquina = Math.floor(Math.random() * 3 );
        switch (resMaquina) { 
            case 0: 
                resMaquina = 'pedra'
                document.getElementById("maquinaFoto").src = "pedra.jpg";
                break;
            case 1: 
                resMaquina = 'tesoura'
                document.getElementById("maquinaFoto").src = "tesoura.jpg";
                break;            
            case 2: 
                resMaquina = 'papel'
                document.getElementById("maquinaFoto").src = "papel.jpg";
                break;
        }

    if ((pedra == true && resMaquina == 'tesoura' ) || (tesoura == true && resMaquina == 'papel') || (papel == true && resMaquina == 'pedra'))  { //condições que o jogador vence
    //pedra > tesoura, tesoura > papel, papel > pedra
            
        document.getElementById("vencedor").innerHTML = "HUMANO VENCEU!";

    } else if( (resMaquina == 'pedra' && tesoura == true) || (resMaquina == 'tesoura' && papel == true) || (resMaquina == 'papel' && pedra == true)) { //condições que a máquina vence
            
        document.getElementById("vencedor").innerHTML = "MÁQUINA VENCEU!";
    } else { //empate
            
        document.getElementById("vencedor").innerHTML = "EMPATE!";
    }

    if(tesoura == true) { 
        document.getElementById("humanoFoto").src = "tesoura.jpg";
    } else if(papel == true) { 
        document.getElementById("humanoFoto").src = "papel.jpg";
    } else { 
        document.getElementById("humanoFoto").src = "pedra.jpg";
    }
} 
}
