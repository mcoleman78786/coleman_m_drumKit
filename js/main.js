(() => {
	console.log("fired! read to jam");

	function playDrumKitSound(event) {
	    // debugger;
	    // Select the corresponding audio element and make it play
	    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	    // console.log(audio);
	    // 
	   // Debugging / error handling
	   // if we don't have a matching audio element, then kill the funciton
	   // ! is a "not" operator or a bang
	   if (!audio) { return; }  // return stops code execution


	   	//  Rewind audio on every click and make it play
	    audio.currentTime = 0;
	    audio.play();

	    // grab the div and animate it
	    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	}

	window.addEventListener("keydown", playDrumKitSound);
})();