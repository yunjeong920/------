$(function(){
  var swiper = new Swiper(".firstSwiper", {
    spaceBetween: 30,
    conteredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})

$(function(){
  var mySwiper = new Swiper('.secondSwiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      960: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      770: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
    }
  })
});
