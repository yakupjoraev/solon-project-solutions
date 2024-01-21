// Custom Scripts
// Custom scripts
// Мобильное меню бургер
// function burgerMenu() {
//   const burger = document.querySelector('.burger')
//   const menu = document.querySelector('.menu')
//   const body = document.querySelector('body')
//   burger.addEventListener('click', () => {
//     if (!menu.classList.contains('active')) {
//       menu.classList.add('active')
//       burger.classList.add('active-burger')
//       body.classList.add('locked')
//     } else {
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     }
//   })
//   //снять классы при клике на элементы меню
//   const menuItems = document.querySelectorAll('.menu__item')

//   menuItems.forEach(item => {
//     item.addEventListener('click', function () {
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     })
//   });

//   // Вот тут мы ставим брейкпоинт навбара
//   window.addEventListener('resize', () => {
//     if (window.innerWidth > 991.98) {
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     }
//   })
// }
// burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


function heroSlider() {
  const container = document.querySelector('.hero');
  if (!container) {
    return null;
  }

  const swiper = new Swiper('.hero__slider', {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.hero__slider-arrow--next',
      prevEl: '.hero__slider-arrow--prev',
    },

    pagination: {
      el: '.hero__slider-pagination',
      type: 'bullets',
      clickable: true
    },

    breakpoints: {
      // Добавьте здесь необходимые breakpoints, если требуется
    },

    on: {
      slideChangeTransitionStart: function () {
        // Пауза автовоспроизведения при ручной навигации
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
      slideChangeTransitionEnd: function () {
        // Возобновление автовоспроизведения после завершения навигации
        if (!swiper.autoplay.running) {
          swiper.autoplay.start();
        }
      },

      autoplay: function () {
        swiper.updateSlides(); // Обновляем слайды перед автовоспроизведением
      },
    },
  });

  document.addEventListener('mouseenter', event => {
    const el = event.target;
    if (el && el.matches && el.matches('.hero__slider')) {
      el.swiper.autoplay.stop();
      el.classList.add('swiper-paused');

      const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
      activeNavItem.style.animationPlayState = "paused";
    }
  }, true);

  document.addEventListener('mouseleave', event => {
    const el = event.target;
    if (el && el.matches && el.matches('.hero__slider')) {
      el.swiper.autoplay.start();
      el.classList.remove('swiper-paused');

      const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

      activeNavItem.classList.remove('swiper-pagination-bullet-active');

      setTimeout(() => {
        activeNavItem.classList.add('swiper-pagination-bullet-active');
      }, 10);
    }
  }, true);
}

heroSlider();

