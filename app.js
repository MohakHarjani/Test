let inputElement = document.querySelector('#input-area');
let generateButton = document.querySelector('#generate')
let textArea = document.querySelector('#text-area')
let messageElement = document.querySelector('#message-area')
//=====================================================================================
let words = null
let startTime = ''
let wordIndex = 0;
let node = 0;
let sampleText = ''

//=====================================================================================

generateButton.addEventListener('click', addSampleText);
inputElement.addEventListener('input', checkInput)
let clearInputs = ()=>{
    words = null;
    startTime = '';
    wordIndex = 0;
    node = 0;
    sampleText = '';
    inputElement.classList = [];

}
//===================================================================================
//CALLBACKS FOR LISTENERS
function checkInput(){
    const inputText = inputElement.value;

    if (inputText == words[wordIndex])
    {
        clearAndMove()
        node++   //incrementing the "span" index which will  be highlighted

        if (wordIndex == words.length) {  //If inputText matched sampleText and word matched was the last word of sampleText
            success()
            //inputElement.removeEventListener('input', checkInput)
        }
    }
    else
    {
        if (words[wordIndex].startsWith(inputText)){ 
            inputElement.classList.remove('error')
        }
        else{
            inputElement.classList.add('error')
        }
    }
}
function addSampleText(){
    clearInputs();
    startTime = new Date().getTime();
    inputElement.value = ''
    messageElement.innerText = ''
    
    generateText()
    sampleText.split(' ');
    words = sampleText.split(' ')
 
    let add = ''
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i] + " "
        add = add + `<span>${words[i]}</span>`
    }
    textArea.innerHTML = add
    textArea.childNodes[0].className = 'highlight';
}
//====================================================================================================================
//HELPER FUNCTIONS
function generateText(){
    let randomIndex = Math.floor(Math.random() * data.length)
    sampleText = data[randomIndex]
    
}
function clearAndMove(){
    inputElement.value = ''
    wordIndex++;
    
    textArea.childNodes[node].className = '';
    if(node + 1 != words.length){
        textArea.childNodes[node + 1].className ='highlight';
    }   
}
function success(){
    let elapsedTime =  new Date().getTime() - startTime;
    let seconds = elapsedTime / 1000;
    let message = `CONGRATS! YOU PASSED THE TYPING TEST IN ${seconds}seconds`;
    messageElement.innerText = message

     words = null
    startTime = ''
    wordIndex = 0;
    node = 0;
    sampleText = ''

}
//====================================================================================================================

