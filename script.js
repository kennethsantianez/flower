onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 100);
};

let hasPlayed = false; // Flag to track if audio has been played

document.getElementById("playButton").addEventListener("click", function () {
	console.log('play');
	if (!hasPlayed) { // Play only if it hasn't played before
		let audio = new Audio("music.MP3"); // Replace with your actual file
		audio.play().catch(error => console.log("Autoplay blocked:", error));
		hasPlayed = true; // Set flag to true after playing
	}
});