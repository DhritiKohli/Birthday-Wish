const viewLetterBtn = document.getElementById("letterButton");
const letter = document.getElementById("letterContent");
const exitLetter = document.getElementById("letterExit");
const candleLightVideo = document.getElementById("candleLightVideo");
const blowCandleBtn = document.getElementById("blowCandleBtn");
// Letter Functionality

viewLetterBtn.addEventListener("click", () => {
    letter.style.display = 'block';
} );

exitLetter.addEventListener("click", ()=>{
    letter.style.display= 'none';
})

if (candleLightVideo) {
    const keepPlaying = () => {
        const playAttempt = candleLightVideo.play();

        if (playAttempt && typeof playAttempt.catch === "function") {
            playAttempt.catch(() => {
                // Autoplay can still be blocked in some browsers until the first interaction.
            });
        }
    };

    candleLightVideo.addEventListener("pause", () => {
        keepPlaying();
    });

    candleLightVideo.addEventListener("ended", () => {
        keepPlaying();
    });

    keepPlaying();
}

blowCandleBtn.addEventListener("click",()=>
{
    if (candleLightVideo) {
        const blowedCake = document.createElement("img");
        blowedCake.src="../assets/img/CakeBlown.png";
        blowedCake.id = "candleLightVideo";
        blowedCake.classList.add("animated-object");
        
        candleLightVideo.replaceWith(blowedCake);
    }
})