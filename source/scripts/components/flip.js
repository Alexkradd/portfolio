export default function flip () {
  const flipCard=document.querySelector('.flip-card');
  const button=document.querySelector('.welcome__button');
  const mainBtn=document.getElementById('mainBtn');
  if (flipCard.classList.contains('active')){

    flipCard.classList.remove('active');

  } else {
    flipCard.classList.add('active');
    button.classList.add('active-button');
    

  }

}
