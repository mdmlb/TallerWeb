
//Charact
const charact = document.querySelector('.charact');
const charactText1 = document.querySelector('.charact__textOne');
const charactText2 = document.querySelector('.charact__textTwo');
const charactText3 = document.querySelector('.charact__textThree');
const charactDot1 = document.querySelector('.charact__dotOne');
const charactDot2 = document.querySelector('.charact__dotTwo');
const charactDot3 = document.querySelector('.charact__dotThree');

charactDot1.addEventListener('click', function(){
    //let scr = "./Resources/dotActive.png";
    charactDot1.setAttribute('src', './Resources/dotActive.png');
    charactText1.style.transform = 'opacity(none)';
    
    console.log();
});

charactDot2.addEventListener('click', function(){
    charactDot2.setAttribute('src', './Resources/dotActive.png');

    console.log("Boton 2");
});

charactDot3.addEventListener('click', function(){
    charactDot3.setAttribute('src', './Resources/dotActive.png');
    console.log("Boton 3");
});



//Gallery
const carrousel = document.querySelector('.carrousel');
const carrouselStripe = document.querySelector('.carrousel__stripe');
const carrouselSlider = document.querySelector('.carrousel__slider');
carrouselSlider.setAttribute('max', carrouselStripe.children.length - 1);
carrouselSlider.addEventListener('input', function() {
  const width = carrousel.clientWidth;
  const value = carrouselSlider.value;
  carrouselStripe.style.transform = 'translate(-' + (width * value) + 'px, 0px)';
});