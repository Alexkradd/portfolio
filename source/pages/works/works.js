import 'normalize.css';
import './works.scss';
import '../about/about.scss';
import '../../components/mixin/media.scss';
import './../../components/socials/socials.scss';
import './../../components/header/header.scss';
import './../../components/burger/burger.scss';
import './../../components/card/card.scss';
import './../../components/card-login/card-login.scss';
import '../../components/footer/footer.scss';
import '../index/index.scss';
import '../../components/menu/menu.scss';
import '../../components/fonts/fonts.scss';

import burgerMenu from '../../scripts/components/burger-menu';

var burger = document.querySelector('.burger');
burger.addEventListener('click', function(e){
  e.preventDefault();
  burgerMenu();
});

import parallax from '../../scripts/components/paralax';

window.addEventListener('scroll',function (e) {
  var wScroll = window.pageYOffset;
  parallax().init(wScroll);
});

