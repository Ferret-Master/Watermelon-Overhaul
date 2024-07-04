var audioPathArray = ["/pa/audio/1.wav","/pa/audio/2.wav","/pa/audio/3.wav"]





function playAudio(filename){
	api.audio.playSoundFromFile(filename);
}


var chosenAudio = _.sample(audioPathArray)
playAudio(chosenAudio)
