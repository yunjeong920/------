
$(function(){
  let firstRoom = new Swiper(".firstSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    observeParents: true,
    observer: true,
    observeSlideChildren: true,
    loop: "true",
    hashNavigation: {
      watchState: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})

$(function(){
  let secondRoom = new Swiper(".secondSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    observeParents: true,
    observer: true,
    observeSlideChildren: true,
    loop: "true",
    hashNavigation: {
      watchState: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})


$(function(){
  let thirdRoom = new Swiper(".thirdSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    observeParents: true,
    observer: true,
    observeSlideChildren: true,
    hashNavigation: {
      watchState: true,
    },
    loop: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})


$(function(){
  let fourthRoom = new Swiper(".fourthSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    observeParents: true,
    observer: true,
    observeSlideChildren: true,
    hashNavigation: {
      watchState: true,
    },
    loop: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})
