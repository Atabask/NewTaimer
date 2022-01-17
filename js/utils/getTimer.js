// import {Howl, Howler} from '../libs/howler.js';

// const sound = new Howl({
//   src: '../audio/audio.mp3'
// });


// sound.play();

// Howler.volume(0.5);

window.startTimer = function() {
    let timer = document.getElementById("timer");   
    

    if (timer.value == 0) {
        sound.play();
        return; 
    } else {
        document.getElementById("timer").innerHTML = timer.value --;
        setTimeout(startTimer,1000);
    }
}

window.stopTimer = function() {
    clearTimeout(timer.value);
    timer.value = 0;
}


