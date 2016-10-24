function showAnswer(userAnswer, productId, questionId, ) {
    getAnswer(url, productId, question);
    if (xmlHttp.responseText === 'correct') {
        colorAnswers(xmlHttp);
        badged('on', productId);
        finger('ok');
    } else {
        colorAnswers(xmlHttp);
        finger('bad');
    }
}

function getAnswer(url, productId, questionId, userAnswer) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl + '/products/' + productId + '/questions/' + questionId + '/answers/' + userAnswer, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function badged(action, productId) {
    if (action === 'on') {
        document.getElementById(productId).innerHTML = imageMap(productId);
    };
}

function finger(status) {
    if (status === 'ok') {
        // dedo para arriba se ilumina
    } else {
        // dedo para abajo se Ilumina
    };
}

function colorAnswers(correctAnswer) {
    answer1 = 0; //respuesta1 en rojo
    answer2 = 0; //respuesta2 en rojo
    answer3 = 0; //respuesta3 en rojo

    if (answer1 === correctAnswer) {
        // pintar answer1 de verde
    } else if (answer2 === correctAnswer) {
        // pintar answer2 de verde
    } else {
        // pintar answer3 de verde
    }
}




function imageMap() {

    var accessManagement = "<img src='images/>";
    var apimanager = "<img src='images/'>";
    var cloudHub = "img src='images/'>";
    var exchange = "img src='images/product-exchange.png'>";
    var runtimeManager = "img src='images/product-runtime.png'>";
    var studio = "img src='images/product-studio'>";
}
