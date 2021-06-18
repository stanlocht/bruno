var audioPaused = true;
var first = true;
var audio = null;
var volume = document.querySelector("#volume-control");
var pPause = document.querySelector('#play-btn');

function playAudio(url) {
    if (audioPaused) {
        if (first) {
            audio = new Audio(url);
            first = false;
        }
        audio.play();
        audioPaused = false;
        pPause.src = "imgs/oog.png"
    } else {
        audio.pause();
        audioPaused = true;
        pPause.src = "imgs/grijze_triangel.png"
    }
}



volume.addEventListener("change", function(e) {
    console.log(e.currentTarget.value)
    audio.volume = e.currentTarget.value / 100;
})

