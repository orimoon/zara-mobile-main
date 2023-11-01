$(document).ready(function () {
    // Assign some jquery elements we'll need
    var $swiper = $(".swiper-container");

    var mySwiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });
});
var swiper2 = new Swiper(".swiper-container2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
});

// 스크롤트리거
gsap.registerPlugin(ScrollTrigger);

gsap.to(".txt-left", {
    x: 200,
    scrollTrigger: {
        trigger: ".sec-contents",
        scrub: true,
    },
});
gsap.to(".txt-right", {
    x: -200,
    scrollTrigger: {
        trigger: ".sec-contents",
        scrub: true,
    },
});
gsap.to(".sec-contents img", {
    scale: 4,
    scrollTrigger: {
        trigger: ".sec-contents",
        scrub: true,
    },
});
