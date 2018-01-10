import 'normalize.css';
import './index.scss';
import '../../components/mixin/media.scss';
import '../../components/card/card.scss';
import '../../components/card-login/card-login.scss';
import './../../components/socials/socials.scss';
import './../../../img/icons/sprite.svg';
//import '../../scripts/water';

import flip from '../../scripts/components/flip';
const button=document.querySelector('.welcome__button');
button.onclick=function (e) {
  e.preventDefault();
  flip();
};
const mainBtn=document.getElementById('mainBtn');
mainBtn.onclick=function (e) {

  e.preventDefault();
  flip();
};



