export default  function parallax () {
  var bg = document.querySelector('.header');
  var user = document.querySelector('.card');
  return{
    move: function (block, windowScroll, strafeAmont, flag) {
      var strafe = windowScroll / -strafeAmont;
      var style = block.style;
      var transformString;
      var count = 50 + strafe;
      flag
        ? transformString = `translate(-50%, -${count}%)`
        : transformString = 'translate3d(0,' + strafe + '%, 0)';
      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function (wScroll) {
      this.move(bg, wScroll, 350, false);
      this.move(user, wScroll, 5, true);

    },

  };

}

//window.onscroll = function () {
//var wScroll = window.pageYOffset;
//parallax.init(wScroll);
//};
