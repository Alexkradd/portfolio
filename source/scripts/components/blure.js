module.exports = $(function () {

  function magicBlur() {
    const background = document.querySelector('.about-me');
    const container = document.querySelector('.blure');
    const blur = document.querySelector('.blure-bg');

    const style = blur.style;

    const bgMargin = background.offsetTop;

    const backgroundWidth = background.offsetWidth;
    const backgroundHeight = background.offsetHeight;
    const positionContainerL = container.offsetLeft;
    const positionContainerFullT = container.offsetTop;

    const positionContainerT = positionContainerFullT - bgMargin;

    style.backgroundSize = `${backgroundWidth}px ${backgroundHeight}px`;
    style.backgroundPosition = `-${positionContainerL}px -${positionContainerT}px`;

    console.log('@@',backgroundWidth,backgroundHeight,positionContainerL,positionContainerT);
  }
  //todo: для нормального изображения нужно попробовать с img фон секции или на маленьких экранах убрать блур

  $(window).on('resize', function () {
    //console.log('hello resize');
    magicBlur();
  });

  magicBlur();
});
