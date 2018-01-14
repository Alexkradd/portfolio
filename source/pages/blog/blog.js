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

import parallax from '../../scripts/components/paralax';

window.addEventListener('scroll',function () {
  var wScroll = window.pageYOffset;
  parallax().init(wScroll);
});

$(function () {
  $(window).on('scroll', function() {
    const nav = $('.blog__aside');
    const section = $('.blog-conten');
    const $window = $(window);
    //console.log(section.offset().top);
    //console.log($window.scrollTop() + ' это скролл топ');
    if ($window.scrollTop() >= section.offset().top) {
      nav.addClass('.blog__aside_fixed');
    } else {
      nav.removeClass('.blog__aside_fixed');
    }

    $('.blog__content').each(function() {
      //console.log($(this));
      let textEl = $(this);

      if($window.scrollTop() >= textEl.offset().top - 200 && $window.scrollTop() <= textEl.offset().top + textEl.height()) {
        //console.log('test!!');
        //textEl.text('hi');
        let attrEl = textEl.attr('data-name');
        //console.log(attrEl);
        let itemEl = $('[data-name=' + attrEl + ']');
        //console.log(itemEl);
        $('.article-titles__item').removeClass('article-titles__item_active');
        itemEl.addClass('article-titles__item_active');
      }
    });
  });
});