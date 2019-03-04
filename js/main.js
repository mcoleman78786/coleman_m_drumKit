(() => {
	console.log("fired! read to jam");

	function playDrumKitSound(event) {
	    // debugger;
	    // Select the corresponding audio element and make it play
	    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	    console.log(audio);

	    audio.play();
	}

	window.addEventListener("keydown", playDrumKitSound);
})();