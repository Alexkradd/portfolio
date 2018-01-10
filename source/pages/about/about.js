import 'normalize.css';
import './about.scss';
import '../../components/mixin/media.scss';
import './../../components/card/card.scss';
import './../../components/socials/socials.scss';
import './../../components/header/header.scss';
import './../../components/burger/burger.scss';
import '../../components/footer/footer.scss';
import '../../components/diagrams/diagrams.scss';
import '../index/index.scss';
import '../../components/fonts/fonts.scss';
import '../../components/menu/menu.scss';

import initMap from'../../scripts/components/map';
window.initMap=initMap;

import burgerMenu from '../../scripts/components/burger-menu';

var burger = document.querySelector('.burger');
burger.addEventListener('click', function(e){
  e.preventDefault();
  burgerMenu();
});


