
//Charact
const charact = document.querySelector('.charact');
const charactText1 = document.querySelector('.charact__textOne');
const charactText2 = document.querySelector('.charact__textTwo');
const charactText3 = document.querySelector('.charact__textThree');
const charactDot1 = document.querySelector('.charact__dotOne');
const charactDot2 = document.querySelector('.charact__dotTwo');
const charactDot3 = document.querySelector('.charact__dotThree');

charactDot1.addEventListener('click', function(){
    const img1 = './Resources/dotInnactive.png';
    const img2 = './Resources/dotActive.png';

    const currentImg = charactDot1.getAttribute('src');

    if(currentImg == img1) {
        charactDot1.setAttribute('src', img2);
    } else {
        charactDot1.setAttribute('src', img1);
    }

    charactText1.classList.toggle("textopacity");
});




charactDot2.addEventListener('click', function(){
    const img1 = './Resources/dotInnactive.png';
    const img2 = './Resources/dotActive.png';

    const currentImg = charactDot2.getAttribute('src');

    if(currentImg == img1) {
        charactDot2.setAttribute('src', img2);
    } else {
        charactDot2.setAttribute('src', img1);
    }

    charactText2.classList.toggle("textopacity");

    console.log("Boton 2");
});

charactDot3.addEventListener('click', function(){
    const img1 = './Resources/dotInnactive.png';
    const img2 = './Resources/dotActive.png';

    const currentImg = charactDot3.getAttribute('src');

    if(currentImg == img1) {
        charactDot3.setAttribute('src', img2);
    } else {
        charactDot3.setAttribute('src', img1);
    }

    charactText3.classList.toggle("textopacity");
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