import '../../components/mixin/media.scss';
import 'normalize.css';
import './blog.scss';
import '../about/about.scss';
import './../../components/socials/socials.scss';
import './../../components/header/header.scss';
import './../../components/burger/burger.scss';
import './../../components/card/card.scss';
import './../../components/card-login/card-login.scss';
import '../../components/footer/footer.scss';
import '../index/index.scss';
import '../../components/fonts/fonts.scss';
import '../../components/menu/menu.scss';

import burgerMenu from '../../scripts/components/burger-menu';

var burger = document.querySelector('.burger');
burger.addEventListener('click', function(e){
  e.preventDefault();
  burgerMenu();
});