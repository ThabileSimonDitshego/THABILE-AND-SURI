const btn = document.getElementById('play-btn');
const audio = document.getElementById('bgAudio');
btn.addEventListener('click', () =>{
    if(audio.paused){
        audio.play();
        btn.textContent = '❚❚';
    }
    else
    {
        audio.paused();
        btn.textContent = '▶';
    }
});