let musicIsPlaying = false; 


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("play-button").onclick = playPause;

});

function playPause () {
  const body = document.querySelector('body')
  const musicEl = document.getElementById('musicEl');
  const playButton = document.getElementById('play-button')

  if(musicIsPlaying && musicEl){
    musicEl.remove();
    musicIsPlaying = false;
    playButton.style.innerHTML = "Play"


  }else if(!musicEl) {

    let musicHacks = document.createElement('iframe');
    musicHacks.style.width = "0px";
    musicHacks.style.height = "0px";
    musicHacks.style.opacity = "0";
    musicHacks.style.frameborder = "0";
   
    musicHacks.setAttribute('id', 'musicEl');
    musicHacks.setAttribute('src', 'https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1');
    musicHacks.setAttribute("allow", "autoplay");
    musicHacks.setAttribute("allowfullscreen", "true");

    musicIsPlaying = true; 
    playButton.style.innerHTML = "Pause"

    body.appendChild(musicHacks)
  }
  

}

//https://stackoverflow.com/questions/37244505/how-to-autostart-youtube-video-with-low-volume-iframe