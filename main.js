function toggle() {
    var element = document.getElementById("body");
    
    element.classList.toggle("body-invert");   
}

function type(){
    var e = document.getElementById("key");
    var text = e.getAttribute("data-key-text");
    // alert(text);
    document.getElementById("textt").innerHTML = text;
}
// setInterval(toggle,180); 