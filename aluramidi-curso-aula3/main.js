function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
    
    if( elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor invalido');

    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');





for(let i = 0 ;i < listaDeTeclas.length; i++){

    const tecla =listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

   
    
    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }else {
            tecla.classList.remove('ativa');
        }


        
    }
    
    
}
