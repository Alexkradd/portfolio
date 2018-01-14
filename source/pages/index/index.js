import 'normalize.css';
import './index.scss';
import '../../components/mixin/media.scss';
import '../../components/card/card.scss';
import '../../components/card-login/card-login.scss';
import './../../components/socials/socials.scss';
import './../../../img/icons/sprite.svg';
//import '../../scripts/water';

import flip from '../../scripts/components/flip';
if (document.querySelector('.flip-card')) {
  console.log(11);
  const rotate = flip();
  rotate.init();
}
/*const button=document.querySelector('.welcome__button');
const mainBtn=document.getElementById('mainBtn');
button.onclick=function (e) {
  e.preventDefault();
  flip();
};

mainBtn.onclick=function (e) {
  console.log(14);

  e.preventDefault();
  flip();
};*/



