

let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');
let img5=document.getElementById('img5');
let img6=document.getElementById('img6');

img2.onclick=function(event){
  event.preventDefault();
  img1.src=img2.src;
}

img3.onclick=function(event){
  event.preventDefault();
  img1.src=img3.src;
}
img4.onclick=function(event){
  event.preventDefault();
  img1.src=img4.src;
}
img5.onclick=function(event){
  event.preventDefault();
  img1.src=img5.src;
}
img6.onclick=function(event){
  event.preventDefault();
  img1.src=img6.src;
}


let num =document.getElementById("num");
let add =document.getElementById("plus");
let min =document.getElementById("minus");

add.onclick=function(event){
  event.preventDefault();
  num.value=Number(num.value)+1;
  
  }
  
 
    min.onclick=function(event){
      event.preventDefault();
      num.value=Number(num.value)-1;
}



 