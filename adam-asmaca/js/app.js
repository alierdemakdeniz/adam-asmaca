const word_el = document.getElementById("word")
const box= document.getElementById("message")
const win = document.getElementById("true")
const lose = document.getElementById("false")
const wrong = document.getElementById("wrong")
const adam= document.querySelector(".adam")
const selectedWord=getRandomWord();
const correctLetters =[];
const wrongLetters=[];
let i=5;

// oyun başlasın
displayWord();
// tuşa her bastığında 
window.addEventListener("keydown",(e)=>{
    if (e.keyCode >= 65){

        if (selectedWord.includes(e.key)){
            correctLetters.push(e.key)
            
            
        }else{
        
            wrongLetters.push(e.key)
            
            wrongLettersShow();
        }
        displayWord();
        console.log(word_el.children.innerHTML)            
        console.log(word_el.innerText.replace(/\n/g,""));
        checkWord();
    }

})
// rasgele kelime seçmek için 
function getRandomWord(){
    const words = ["sandalye","öğretmen","bıçak","bilgisayar","telefon","masa","yarışma","futbol","basketbol","ayaz","tulum","ayakkabı"]
    return  words[Math.floor(Math.random()*words.length)]
    
}

function displayWord(){
    word_el.innerHTML = `
    ${
        selectedWord.split("").map(letter => `
        <input value="${correctLetters.includes(letter) ? letter: ""}"class="letter" style="color: white">
        </input>`).join("")
    }`
    
}
// hatalı harfleri göstermek ve adam asmak 
function wrongLettersShow(){
    wrong.innerHTML=`${wrongLetters}`
        
            adam.children[i].setAttribute("style","display:block")
        i+= 1;

    
    
    
}
// kelime kontrol etmek
function checkWord(){
    console.log(word_el.innerText.replace(/\n/g,""));
    if (word_el.innerText.replace(/\n/g,"")===selectedWord){
        box.style.display="flex"
        win.style.display="block"
    }else if (i===11){
        box.style.display="flex"
        lose.style.display="block"
    }


}



