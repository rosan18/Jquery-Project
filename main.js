window.onload = function(){
let div = document.createElement('div');
div.id ='content';
document.body.appendChild(div);

css ={
   position: 'absolute',
   left: '50%',
   top:'60%',
   transform: 'translate(-50%, -50%)',
   padding:'10px '
};
for(i in css){
   div.style[i] = css[i];
}

let h1Element = document.createElement('h1');
h1Element.textContent = 'Rosan Restaurant';
div.appendChild(h1Element);

let tab = document.createElement('tab');
tab.id ='tabs';
div.appendChild(tab);
tab.style.textAlign = 'center';
tab.style.width = '100px';


let list = ['home', 'menu','contact',];
for(let i = 0; i < 3; i++){
   let btn = document.createElement('button');
   btn.textContent = list[i]
   tab.appendChild(btn)
}


let img = document.createElement("img");
img.src ='jason-leung-poI7DelFiVA-unsplash.jpg';
div.appendChild(img);
img.style.width ='1400px';
img.style.height ='700px';

let pElement = document.createElement('p');
pElement.textContent = 'We value teamwork, honesty, community involvement, dedication to the culinary arts, and transparency';
div.appendChild(pElement);




}















/*let url = 'jason-leung-poI7DelFiVA-unsplash.jpg'
$(document).ready(function(){

    $(`<img src='${url}'>`).appendTo('#content'); 
    $('#content').css({
       'position': 'absolute',
       'left': '50%',
       'top':'50%',
        'transform': 'translate(-50%, -50%)',
        'padding':'10px',
    
     });
     $('#content img').css({
        'width':'1400px',
        'height': '700px'
     });
     $('h1').css({
        'text-align':'center',
        'margin-top':'80px',
     }
     );
    $('p').css({
        'text-align':'center',
     })
    $('#content img').after('p');
    
  })*/