let lofiIsPlaying = false; 


document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  body.style.

  const playLabel = document.createElement('h2');
  //playLabel.style.fontSize = "10px"
  playLabel.innerHTML = "Play";
  playLabel.setAttribute('id', 'play-header')
  body.appendChild(playLabel);

  //Add playButton to body
  const playButton = document.createElement('button');
  playButton.innerHTML = "Play";
  playButton.setAttribute('id', 'play-button');
  playButton.onclick = playPause;
  body.appendChild(playButton);



});



function playPause () {
  const body = document.querySelector('body')
  const musicEl = document.getElementById('musicEl');
  const playButton = document.getElementById('play-button')

  if(lofiIsPlaying && musicEl){
    musicEl.remove();
    lofiIsPlaying = false;
    playButton.innerHTML = "Pause"


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

    lofiIsPlaying = true; 
    playButton.innerHTML = "Pause"

    body.appendChild(musicHacks)
  }
  

}

//https://stackoverflow.com/questions/37244505/how-to-autostart-youtube-video-with-low-volume-iframe