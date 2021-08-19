var btnTranslate =document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorhandler(error){
    console.log("error occured", error);
    alert(" Server not responding Try after sometime");
}

function clickEventHandler()
{
    var inputText = txtInput.value;   //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
        })
    .catch(errorhandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
 
