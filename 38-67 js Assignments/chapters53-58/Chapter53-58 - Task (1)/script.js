//Chapter 53--58
// Task

// var arr = ["/images/others/1.jpg","/images/others/2.jpg"];

var images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.png',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.png',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/4.png',
    'images/15.jpg'
];

for (let index = 0; index < images.length; index++) {
    var oneee = document.getElementById('one');
    var e=  document.createElement('img');
    e.src = images[index];
    e.setAttribute('onclick','modelFunction(this);');
    oneee.append(e);
}   

function modelFunction(v) {
    var m = document.getElementById('modal');
    m.setAttribute('class','modal-open');
    m.removeAttribute('class','modal-close');
    m.style.display = 'block';
    document.getElementById('modal-img').src = v.src;
    
}
function onClosedImagModal(){
    var n = document.getElementById('modal');
    n.setAttribute('class','modal-close');
    n.removeAttribute('class','modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}

function zoonIn() {
    var d= document.getElementById('para');
    var computedFontSize = window.getComputedStyle(document.getElementById("para")).fontSize;
    var fontSize = parseInt(computedFontSize);
    fontSize = fontSize + 10 + "px";
    d.style.fontSize = fontSize;
}

function zoomOut() {
    var d= document.getElementById('para');
    var computedFontSize = window.getComputedStyle(document.getElementById("para")).fontSize;
    var fontSize = parseInt(computedFontSize);
    fontSize = fontSize-10;
    d.style.fontSize = fontSize+"px";
}

