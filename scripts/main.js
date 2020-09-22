

const carrousel = document.querySelector('.carrousel');
const carrouselStripe = document.querySelector('.carrousel__stripe');
const carrouselSlider = document.querySelector('.carrousel__slider');
carrouselSlider.setAttribute('max', carrouselStripe.children.length - 1);
carrouselSlider.addEventListener('input', function() {
  const width = carrousel.clientWidth;
  const value = carrouselSlider.value;
  carrouselStripe.style.transform = 'translate(-' + (width * value) + 'px, 0px)';
});