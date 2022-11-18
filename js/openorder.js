function incoming(i){
    if (i == 1) {
        document.getElementById("incomingOne").style.display = "none";
    }
    console.log("hello world");
}
document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const number = urlParams.get('product');
    if (number == 1) {
        //document.getElementById("incomingOne").style.display = "none";
        document.getElementById("incomingTwo").style.display = "none";
        document.getElementById("incomingThree").style.display = "none";
    }
    else if (number == 2) {
        document.getElementById("incomingOne").style.display = "none";
        //document.getElementById("incomingTwo").style.display = "none";
        document.getElementById("incomingThree").style.display = "none";
    }
    else if (number == 3) {
        document.getElementById("incomingOne").style.display = "none";
        document.getElementById("incomingTwo").style.display = "none";
        //document.getElementById("incomingThree").style.display = "none";
    }
    else {
        document.getElementById("incomingOne").style.display = "none";
        document.getElementById("incomingTwo").style.display = "none";
        document.getElementById("incomingThree").style.display = "none";
    }
    //console.log("hello world");
 }, false);