let lofiIsPlaying = false; 


document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  ///Set image
  // let image = "url('lofiP.png')";
  // let image = document.createElement('img')
  // image.setAttribute('id', 'lofi-girl-image')
  // image.setAttribute('src', 'url(lofiP.png'))
  // image.style.height = '100px'
  // image.style.wwidth = '120px'
  // body.appendChild(image)


      /* background-size:     contain;                      
  background-repeat:   no-repeat;
  background-position: center center;    */

  body.style.backgroundImage = "url('lofiP.png')";
  body.style["background-size"] = "cover";
  body.style["background-repeat"] = "no-repeat";
  body.style["background-position"] = "center center";
  body.style["height"] = "300px"
  body.style["width"] = "350px"
  body.style["display"] = "flex"




  const spanButton = document.getElementById('button-span');
  console.log(spanButton)

  const playLabel = document.createElement('h2');
  //playLabel.style.fontSize = "10px"
  playLabel.innerHTML = "Play";
  playLabel.setAttribute('id', 'play-header')
  //body.appendChild(playLabel);

  //Add playButton to body
  const playButton = document.createElement('button');
  playButton.innerHTML = "Play";
  playButton.setAttribute('id', 'play-button');
  playButton.onclick = playPause;
  spanButton.appendChild(playButton);


});



function playPause () {
  const body = document.querySelector('body')
  const musicEl = document.getElementById('musicEl');
  const playButton = document.getElementById('play-button')

  if(lofiIsPlaying && musicEl){
    musicEl.remove();
    lofiIsPlaying = false;
    playButton.innerHTML = "Play"


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