/**start from bottom*/
function scrollBottom() {window.scrollTo(0, 62000);}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);

/**refresh from bottom*/
window.history.scrollRestoration = 'manual'
    if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 62000);
    }
}

/**endless scroll*/
var bgHeight = 62000; // pixel height of background image

$(document).ready(function() {   
    $('body').height( bgHeight + $(window).height() );
    $(window).scroll(function() {
        if ( $(window).scrollTop() >= ($('body').height() - $(window).height()) ) {
            $(window).scrollTop();
        }
        else if ( $(window).scrollTop() == 0 ) {
            $(window).scrollTop($('body').height() - 35000);
        }    
    });
});

/**
function backBottom() {window.scrollTo(0, 5000);}
if (window.addEventListener) window.pageYOffset = 0("DOMContentLoaded", backBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);
*/

/**auto play*/
/**var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }
  */



/** changing number*/

$(window).on('scroll',function(){
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  $('p').html(scrollBottom);
}).trigger('scroll');

