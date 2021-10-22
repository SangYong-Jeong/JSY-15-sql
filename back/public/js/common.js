$('.mobile-wrap').click(onShow);

function onShow(e) {
  $('.navi-wrap').css('display', 'flex')
  $('.mobile-wrap').off('click').click(onHide)
}

function onHide(e) {
  $('.navi-wrap').css('display', 'none')
  $('.mobile-wrap').off('click').click(onShow)
}

$(window).resize(onResize);

function onResize() {
  $(document).width() >= 991
    ? $('.navi-wrap').css('display', 'flex') 
    : $('.navi-wrap').css('display', 'none')
}
