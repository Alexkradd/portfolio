export default function burgerMenu () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  //console.log(burger);
  if(burger.classList.contains('burger-active')){
    burger.classList.remove('burger-active');
    menu.classList.remove('menu-active');
  }else{
    burger.classList.add('burger-active');
    menu.classList.add('menu-active');
  }
}
