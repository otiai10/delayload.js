/**
 * delayload
 * Thanks to : http://jsdo.it/itahana/eA4V @itahana
**/
$(function(){
  var imgs = $('img.delayload');
  var pos  = 0;
  $(window).load(delayLoad);
  $(window).scroll(delayLoad);
  function delayLoad(){
    $.each(imgs, function(i, img){
      pos = $(img).offset().top - $(window).height();
      console.log(pos);
      if(pos < $(window).scrollTop()){
        if($(img).attr('src') == ''){
          //$(img).attr('src', $(img).attr('data'));
          $(img).hide().attr('src', $(img).attr('data')).fadeIn(800);
        }
      }
    });
  }
});
