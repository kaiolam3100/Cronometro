window.onload = function(){

    let appendSec = document.getElementById('segundos');
    let appendMin = document.getElementById('minutos');
    let appendHor = document.getElementById('horas');
    let add = document.getElementById('add');
    let start = document.getElementById('start')
    let stop = document.getElementById('stop')
    let reset = document.getElementById('reset')

let hor = 00;
let min = 00;
let sec = 00;
let interval;



start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer,1000);
}


stop.onclick = function(){
    clearInterval(interval); // Para a função de setInterval que estiver rodando.
}


reset.onclick = function(){
    clearInterval(interval); // É chamado clearInterval para garantir que não há mais de um setInteval rodando ao mesmo tempo.
    sec = "00"; // Aqui ela veio como string
    min = "00";// Por que transformar em strings? Para passar ela para o append.
    hor = "00";
    
    appendMin.innerHTML = min;
    appendSec.innerHTML = sec;
    appendHor.innerHTML = hor;


}

    function startTimer(){
        sec++;

        if(sec <=9){
            appendSec.innerHTML = "0" + sec;
        }

        if(sec > 9 ){
            appendSec.innerHTML = sec
        }

        if ( sec > 60){
            console.log("seconds");
            min++;
            appendMin.innerHTML = "0" + min;
            sec = 0;
            appendSec.innerHTML = "0"+ 0;
        }

        if (min > 9){
            appendMin.innerHTML = min;
        }

        if(hor > 9){
            appendHor.innerHTML = hor;
        }
        if (min > 60){
            console.log("hora");
            hor++;
            appendHor.innerHTML = "0" + hor;
            min = 0;
            appendMin.innerHTML = "0"+ 0;
        }

    }

    add.onclick = function(){
        clearInterval(interval);
        min++;
        if(min <= 9){
        appendMin.innerHTML = "0" + min;
        }

        if(min > 9){
            appendMin.innerHTML = min;
        }

        if(min > 60){
            hor++;
            appendHor.innerHTML = "0" + hor;
            min = 0;
            appendMin.innerHTML = "0"+ 0;

        }
  
        
        


    }
}