var behind=document.getElementsByClassName("behind")[0];
var ahead=document.getElementsByClassName("ahead")[0];
var slider=document.getElementsByClassName("slider")[0];
var imgs=[
    "assets/img/nurtac.jpg",
    "assets/img/nurtac2.jpg",
    "assets/img/dilay.jpg",
    "assets/img/dilay2.jpg",
    "assets/img/lillyColinsDrawing1.jpg",
    "assets/img/lillyColinsDrawing2.jpg",
    "assets/img/lillyColinsDrawing3.jpg",
    "assets/img/luana1.jpg",
    "assets/img/luana2.jpg",
    "assets/img/milena1.jpg",
    "assets/img/murat1.jpg",
    "assets/img/scot1.jpg",
    "assets/img/scot2.jpg",
    "assets/img/styles1.jpg",
    "assets/img/rihanna1.jpg",
];
var availableImgIndex=0;

function nextPicture(){
    availableImgIndex++;
    if(availableImgIndex>=imgs.length){
        availableImgIndex=0;
    }
    slider.src=imgs[availableImgIndex];
}
function previousPicture(){
    availableImgIndex--;
    if(availableImgIndex<0){
        availableImgIndex=imgs.length-1; 
    }
    slider.src=imgs[availableImgIndex];
}
setInterval(nextPicture,1500);

behind.onclick=function(){
   previousPicture();
}
ahead.onclick=function(){
  nextPicture();
}