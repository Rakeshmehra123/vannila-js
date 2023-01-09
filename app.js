var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
    console.log("error occurd" + error)
    alert("Hey server is down right now try again after somer time")
}


function clickHandler(){
   // outputDiv.innerText = "ajsjsjsjsjsjsj " + textInput.value;

   var inputText = textInput.value;//taking input
   //calling server for porcessing
   fetch(getTranslationURL(inputText))
   .then(response=>response.json())
   .then(json=>{
    var translatedText=json.contents.translated;
    outputDiv.innerText= translatedText;//output
 } )
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler)