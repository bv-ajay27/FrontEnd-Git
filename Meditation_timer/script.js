const meditation = () =>{
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline');
    const video = document.querySelector('.video-container');

    // sounds
    const sounds = document.querySelector(".sound picker button");
    // Time display
    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll('.time-select button');
    //get the length of the outline
    const outlineLength = outline.getTotalLength();
    // duration
    let fakeDuration = 600;
    
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    // play diff songs
    sounds.forEach(sound =>{
        sound.addEventListener('click',function(){
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute("data-video");
            checkPlaying(song);
        });
    })
    // play sound
    play.addEventListener('click',()=>{
        checkPlaying(song);
    });

    // select sound
    timeSelect.forEach(option =>{
        option.addEventListener('click',function(){
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
        });
    });
    //create fun specific to stop and play the song
    const checkPlaying = song =>{
        if(song.paused){
            song.play();
            video.play();
            play.src = "sounds/beach.mp3";
        }
        else{
            song.pause();
            video.pause();
            play.src = "sounds/beach.mp3";
        }
    };

    // we can animate the circle
    song,ontimeupdate = () =>{
        let currTime = song.currTime;
        let elapsed = fakeDuration - currTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        // animate the circle
        let progress = outlineLength - (currTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        //animate the text
        timeDisplay.textContent = `${minutes}:${minutes}`;
        if(currTime >= fakeDuration){
            song.pause();
            song.currTime = 0;
            play.src = "sounds/rain.mp3";
            video.pause();

        }
    }
}