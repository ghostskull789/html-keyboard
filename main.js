function toggle() {
    var element = document.getElementById("body");
    
    element.classList.toggle("body-invert");   
}

(function(){
    var e,c;

    function init(){
         e = document.getElementById("keyboard").getElementsByClassName('keyboard__key');
    
        for(c=0;c<e.length;c++) {
               e[c].addEventListener('onclick',makeClickHandler(c));

            }
         //alert(e);
    }

    function makeClickHandler(c) {
            
        e[c].onclick=function() {
            if(e[c].id=='del'){
                document.getElementById('text').value = '';
            }
            else if(e[c].id=='backspace'){
                document.getElementById('text').value = '';
            }
            else{
            document.getElementById('text').value+=e[c].getAttribute("data-key-text");
            }
        };
        
    }

    window.addEventListener?
    window.addEventListener('load',init,false):
    window.attachEvent('onload',init);
 })();
// setInterval(toggle,180); 