function numWithZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  
  $(".slider-main-component").each(function (index) {
    let totalSlides = numWithZero($(this).find(".swiper-slide.is-collabs").length);
    $('.swiper-number-total').text(totalSlides);
    const swiper = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: 1,
      speed: 700,
      keyboard: true,
      mousewheel: {
        forceToAxis: true
      },
      spaceBetween: "5%",
      loop: true,
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        buttonElement: "button",
        clickable: true
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0]
      },
  
    });
  
    swiper.on('slideChange', function (e) {
      console.log(swiper.realIndex);
      let slideNumber = numWithZero(e.realIndex + 1);
      $('.swiper-number-current').text(slideNumber);
    });
  });