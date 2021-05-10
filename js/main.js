$(function(){
  var winW = winH = imgW = imgH = imgT = imgL = 0;

  resizeFn();

  function resizeFn() {
    winW = $(window).innerWidth();
    winH = $(window).innerHeight();

    imgH = $("img").innerHeight();
    imgH = $("img").innerWidth();
    imgT=(winH-imgH)/2
    imgL=(winW-imgW)/2

    $("img").css({ top: imgT});
    $("img").css({ left: imgL});
  }
  $(window).resize(function(){
    resizeFn();
  })
})
