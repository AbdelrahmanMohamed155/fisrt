var el=document.querySelectorAll(".color-switcher li");
var classlist=[];
 
for (var  i= 0;  i<el.length; i++) {
    classlist.push(el[i].getAttribute('data-color'));
    el[i].addEventListener('click', function () {
   document.body.classList.remove(...classlist);
        document.body.classList.add(this.getAttribute('data-color'));
         
    },false);
    
}