export default function arrowScroll () {
  function scrollMove (elem=false,flag) {

    //console.log(TopMove, 'aaaa');
    const timer = setInterval(function () {
      if (flag) {

        const TopMove = elem.getBoundingClientRect().top - 100;
        if (TopMove < 0) {
          clearInterval(timer);
          //return;
        }
        window.scrollBy(0, 30);
      } else {
        if (window.pageYOffset == 0){
          clearInterval(timer);
        }


        window.scrollBy(0,-30);
      }

    }, 10);

  }
  return {
    init(elem){


      elem.arrow.addEventListener('click',e=>{
        e.preventDefault();
        if (elem.flag){
          scrollMove(elem.sect,  true);
        } else {
          scrollMove(elem.sect,  false);
        }

      });


    },
  };
}