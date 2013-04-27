/**
 * delayload
 * Thanks to : http://jsdo.it/itahana/eA4V @itahana
**/
function enableDelayLoad(opt){
  var DELAYLOAD_FADEIN_DURATION =          800,
      BASE_FRAME_DOM_ELEMENT    =       window,
      TARGET_SELECTOR           = '.delayload',
      DO_FADEIN_EFFECT          =         true;
  if(opt != void 0){
    if(opt.duration != void 0 && typeof(opt.duration) == 'number'){
      DELAYLOAD_FADEIN_DURATION = opt.duration;
    } 
    if(opt.baseDOM  != void 0 && (typeof(opt.baseDOM)  == 'object' || typeof(opt.baseDOM) == 'string')){
      BASE_FRAME_DOM_ELEMENT    = opt.baseDOM;
    }
    if(opt.selector != void 0 && typeof(opt.selector) == 'string'){
      TARGET_SELECTOR           = opt.selector;
    }
    if(opt.doFade   != void 0 && typeof(opt.doFade)   == 'boolean'){
      DO_FADEIN_EFFECT          = opt.doFade;
    }
  }
 
  var imgs = $('img' + TARGET_SELECTOR);
  var pos  = 0;
  $(BASE_FRAME_DOM_ELEMENT).load(delayLoad);
  $(BASE_FRAME_DOM_ELEMENT).scroll(delayLoad);
  if(opt.immediately){
      delayLoad();
  }
  function delayLoad(){
    $.each(imgs, function(i, img){
      pos = $(img).offset().top - $(BASE_FRAME_DOM_ELEMENT).height();
      if(pos < $(BASE_FRAME_DOM_ELEMENT).scrollTop()){
        if($(img).attr('src') == ''){
          if(DO_FADEIN_EFFECT){
            $(img).hide().attr('src', $(img).attr('data')).fadeIn(DELAYLOAD_FADEIN_DURATION);
          }else{
            $(img).attr('src', $(img).attr('data'));
          }
        }
      }
    });
  }
}
