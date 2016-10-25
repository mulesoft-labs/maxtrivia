var url = "http://10.8.8.89:8085/";

function showAnswer(userAnswer, productId, questionId) {
    getAnswer(url, productId, questionId);
    if (xmlHttp.responseText === true) {
        colorAnswers(xmlHttp);
        badged('on', productId);
        

    } else {
        colorAnswers(xmlHttp);
        showLink(productId);
    }
    spinner(true);
}

function showQuestion(productId) {
    spinner(false);
    getQuestion(url, productId);
    displayAnswers();
    
}



function displayAnswers() {
    document.getElementById('answer0').innerText = xmlHttp.responseText
    document.getElementById('answer1').innerText = xmlHttp.responseText
    document.getElementById('answer2').innerText = xmlHttp.responseText

}

function spinner(enable) {
   
    if (enable === true) {
        document.getElementById("../wof/ms_wheel/spin_off.png").disabled = true;
    } else {
        document.getElementById("../wof/ms_wheel/spin_off.png").disabled = false;
    }
}

function getQuestion(url, productId) {
    var questionRequest = new XMLHttpRequest();
    questionRequest.open("GET", url + '/products/' + productId, false); // false for synchronous request
    questionRequest.send();
    return questionRequest.responseText;
}


function getAnswer(url, productId, questionId, userAnswer) {
    var answer = new XMLHttpRequest();
    answer.open("GET", url + '/products/' + productId + '/questions/' + questionId + '/answers/' + userAnswer, false); // false for synchronous request
    answer.send(null);
    return answer.responseText;
}



function badged(action, productId) {
    if (action === 'on') {
         imageMap(productId);
    };
}

function colorAnswers(correctAnswer) {
    document.getElementById('answer0').style.background  = "#D1344E"
    document.getElementById('answer1').style.background  = "#D1344E"
    document.getElementById('answer2').style.background  = "#D1344E"

    if (answer0 === correctAnswer) {
        document.getElementById('answer0').style.background = "#17BC65"
    } else if (answer1 === correctAnswer) {
        document.getElementById('answer1').style.background  = "#17BC65"
    } else {
        document.getElementById('answer2').style.background  = "#17BC65"
    }
}




function imageMap(productId) {
    if (productId === "accessManagement") {
        document.getElementById(productId).innerHTML = "<img src='images/accessmanagement.png'>"
    } else if (productId === "apimanager") {
        // "<img src='images/apimanageraward.png'>"
    } else if (productId === "cloudHub") {
        // "<img src='images/cloudhubawards.png'>"
    } else if (productId === "exchange") {
        // "<img src='images/exchangeaward.png'>"
    } else if (productId === "runtimeManager") {
        //"<img src='images/hybridawards.png'>"
    } else if (productId === "studio") {
        //"<href src='images/studioaward.png'>"
    }
}

function showLink(productId) {
    if (productId === "accessManagement") {
        //link = "<href="https://docs.mulesoft.com/access-management/">" 
    } else if (productId === "apimanager") {
        // "link = "<href="https://docs.mulesoft.com/api-manager/">" 
    } else if (productId === "cloudHub") {
        // link = "<href=https://docs.mulesoft.com/runtime-manager/cloudhub>" 
    } else if (productId === "exchange") {
        // link = "<href="https://docs.mulesoft.com/mule-fundamentals/v/3.8/anypoint-exchange2>" 
    } else if (productId === "runtimemanager") {
        // link = "<href=https://docs.mulesoft.com/runtime-manager/">" 
    } else if (productId === "studio") {
        // link = "<href="https://docs.mulesoft.com/anypoint-studio/v/6/">" 
    }
}


module.exports = {
  question: getQuestion,
  answer: getAnswer
};