const viewLetterBtn = document.getElementById("letterButton");
const letter = document.getElementById("letterContent");
const exitLetter = document.getElementById("letterExit");
// Letter Functionality

viewLetterBtn.addEventListener("click", () => {
    letter.style.display = 'block';
} );

exitLetter.addEventListener("click", ()=>{
    letter.style.display= 'none';
})
