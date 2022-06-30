var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: ".gallery-swiper-pagination",
        type: 'fraction',
        clickable: false,
    },
    navigation: {
        nextEl: '.gallery-swiper-button-next',
        prevEl: '.gallery-swiper-button-prev',
    },

    breakpoints: {
        1441: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        401: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2,
        },
    }
});
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.events-swiper-button-next',
        prevEl: '.events-swiper-button-prev',
    },
    pagination: {
        el: ".events-swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1441: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        769: {
            spaceBetween: 27,
            slidesPerView: 3,
            slidesPerGroup: 3,
            pagination: {
                el: ".events-swiper-pagination",
                clickable: true,
            },
        },
        401: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
            pagination: {
                el: ".events-swiper-pagination",
                clickable: true,
            },
        }
    }
});
var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.projects-swiper-button-next',
        prevEl: '.projects-swiper-button-prev',

    },
    breakpoints: {
        1441: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        401: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
    }
});