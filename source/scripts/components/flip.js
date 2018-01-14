/*export default function flip () {
  const flipCard=document.querySelector('.flip-card');
  const button=document.querySelector('.welcome__button');
  const mainBtn=document.getElementById('mainBtn');
  if (flipCard.classList.contains('active')){

    flipCard.classList.remove('active');

  } else {
    flipCard.classList.add('active');
    button.classList.add('active-button');
    

  }

}*/
export default function flip() {
  const button = document.querySelector('.welcome__button');
  const mainBtn = document.getElementById('mainBtn');
  const flipCard = document.querySelector('.flip-card');

  function rotate(flag) {
    if (flag) {

      flipCard.classList.add('active');
      button.classList.add('active-button');
    } else {
      flipCard.classList.remove('active');

    }
  }

  return {
    init() {
      button.addEventListener('click', function(){
        rotate(true);
      });
      console.log(mainBtn);
      mainBtn.addEventListener('click', function(e){
        e.preventDefault();
        console.log(15);
        rotate(false);
      });
    },
  };
}