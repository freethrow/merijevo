let textArea = document.getElementById("textToConvert");



let btnReset = document.getElementById("reset")

let target = document.getElementById("target")

let wordsArray = [];
// split text in words

const splitText = (text) => {
    return text.split(" ")
}


textArea.addEventListener('keyup',()=>{
    let text = toCyr(replaceI(textArea.value)) 
    target.innerHTML = text;
    console.log(splitText(text))
})



const toCyr = (text) => {
    return serbianTransliteration.toCyrillic(text)
}

const replaceI = (text) => {
    let med = text.replace(/i/g,'e')
    return med.replace(/u/g,'o')

}





btnReset.addEventListener('click',()=>{
    target.innerHTML = '';
    textArea.value = '';
    
})