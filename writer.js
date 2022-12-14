   var main = 'Front-End Web Developer',
       i = 0;

window.onload=function(){
    var writer = setInterval( function() {
        Text = document.getElementById('title').textContent += main[i];
        i = i+1;
        if(i > main.length -1){
            clearInterval(writer);
        }
        
    }, 130);
}    
       