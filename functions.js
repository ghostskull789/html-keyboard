const e = document.getElementsByTagName('td');
var colors = new Array()
function noColor(){
    for(var c=0;c<e.length;c++) {
        //console.log(e.length);
        colors[c] = e[c].style.backgroundColor;
        e[c].style.backgroundColor = 'white';
        //console.log(colors[c]);

     }
  
}

function custom(){
    alert("custom")
}

function withColor(){
    for(var c=0;c<e.length;c++) {
        // console.log(e.length);
        e[c].style.backgroundColor =colors[c];
       // console.log(e[c].getAttribute('key'));
       //colors[c] = null;
     }
}


(function(){
    var e,c;
    var capslock = false,
    numlock = true,
    scrolllock = false;
    var e = document.getElementsByTagName('td');
    var element;

    function init(){

        for(c=0;c<e.length;c++) {
               // console.log(e.length);
               e[c].addEventListener('onclick',makeClickHandler(c));
               e[c].addEventListener('onmouseup',makeClickHandler(c));
               e[c].addEventListener('onmousedown',makeClickHandler(c));
             
              // console.log(e[c].getAttribute('key'));
               
              
            }

            
    }
    
    
    function makeClickHandler(c) {
        
       var key = e[c].getAttribute('key');
       //console.log(key);
      
        e[c].onmousedown=function(){
            e[c].style.borderStyle = "groove";
           
        }

        e[c].onmouseup=function(){
            e[c].style.borderStyle = "inset";
        }

       e[c].onclick=function() {
            
            if( e[c].getAttribute('key').toLowerCase()=='del'){
                document.getElementById('text').value = '';
            }

            // capslock==============================================================================

            else if( e[c].getAttribute('key').toLowerCase()=='capslock'){
              
                capslock=!capslock; 
                if(capslock){
                   document.getElementById("indicator2").style.background= "red";
                }
                else{
                    document.getElementById("indicator2").style.background= "grey";
                }
            }

            // scrolllock==============================================================================

            else if( e[c].getAttribute('key').toLowerCase()=='scrolllock'){
              
                scrolllock=!scrolllock; 
                if(scrolllock){
                    document.getElementById("indicator3").style.background= "red";
                }
                else{
                    document.getElementById("indicator3").style.background= "grey";
                }
            }

            // Numlock==============================================================================

            else if( e[c].getAttribute('key').toLowerCase()=='numlock'){
              
                numlock=!numlock; 
                if(numlock){
                    document.getElementById("indicator1").style.background= "red";
                }
                else{
                    document.getElementById("indicator1").style.background= "grey";
                }
            }

            // backspace==============================================================================

            else if( e[c].getAttribute('key').toLowerCase()=='backspace'){
                document.getElementById('text').value=
                document.getElementById('text').value.replace(/.$/,'');
            }
            // Enter==============================================================================

            else if ( e[c].getAttribute('key').toLowerCase()=='enter') {
                document.getElementById('text').value += '\\\n';
            }

            // if capslock use uppercase==============================================================================

            else{
                if(capslock){
                    document.getElementById('text').value+=  e[c].getAttribute('key').toUpperCase();
                }

                // if not dont use uppercase lol==============================================================================

                else{
                    
                document.getElementById('text').value+=  e[c].getAttribute('key');

                }
            }
        };
   
       
    }
    window.addEventListener?
    window.addEventListener('load',init,false):
    window.attachEvent('onload',init);
})();


