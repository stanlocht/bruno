var audioPaused = true;
var first = true;
var audio = null;

function playAudio(url) {
    if (audioPaused) {
        if (first) {
            audio = new Audio(url);
            first = false;
        }
        audio.play();
        audioPaused = false;
    } else {
        audio.pause();
        audioPaused = true;
    }
}