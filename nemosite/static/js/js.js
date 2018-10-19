var sound_list = {};

//lista dzwięków
sound_list['birds']=new Howl({
  src: ["static/sounds/birds.mp3"],
  volume: 0.5
});
sound_list['dogs']=new Howl({
  src: ["static/sounds/dogs.mp3"],
  volume: 0.5
});
sound_list['rain']=new Howl({
  src: ["static/sounds/rain.mp3"],
  volume: 0.5
});
sound_list['thunders']=new Howl({
  src: ["static/sounds/thunders.mp3"],
  volume: 0.5
});
sound_list['wind']=new Howl({
  src: ["static/sounds/wind.mp3"],
  volume: 0.5
});


function playSound(track){
    sound_list[track].play();
}

function pauseSound(track){
    sound_list[track].pause();
}

function stopSound(track){
    sound_list[track].stop();
}

function changeVolume(track){
    switch(track){
        case 'birds':   var volume = document.getElementById('birds_volume').value/100;
                        break;
        case 'dogs':   var volume = document.getElementById('dogs_volume').value/100;
                        break;
        case 'rain':   var volume = document.getElementById('rain_volume').value/100;
                        break;
        case 'thunders':   var volume = document.getElementById('thunders_volume').value/100;
                        break;
        case 'wind':   var volume = document.getElementById('wind_volume').value/100;
                        break;
        default: break;
    }
    sound_list[track].volume(volume);
}

function playAll(){
    for (var key in sound_list){
        sound_list[key].play();
    }
}

function pauseAll(){
    for (var key in sound_list){
        sound_list[key].pause();
    }
}

function stopAll(){
    for (var key in sound_list){
        sound_list[key].stop();
    }
}