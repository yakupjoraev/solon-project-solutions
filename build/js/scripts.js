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
// function fixedNav() {
//   const nav = document.querySelector('nav')

//   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//   const breakpoint = 1
//   if (window.scrollY >= breakpoint) {
//     nav.classList.add('fixed__nav')
//   } else {
//     nav.classList.remove('fixed__nav')
//   }
// }
// window.addEventListener('scroll', fixedNav)

function menuBtn() {
  const container = document.querySelector('.header');

  if (!container) {
    return null
  }

  const btn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu');
  const btnClose = document.querySelector('.close-modal-btn');

  btn.addEventListener('click', () => {
    menu.classList.toggle('active')
  })

  btnClose.addEventListener('click', () => {
    menu.classList.remove('active')
  })

  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

}

menuBtn();


//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);
    const block = document.getElementById(blockID);

    if (!block) return;

    const offset = 60; // Отступ сверху в пикселях
    const target = block.getBoundingClientRect().top + window.pageYOffset - offset;
    const duration = 2500; // Продолжительность анимации в миллисекундах
    let startTime = null;

    function animate(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const distance = target - window.pageYOffset;
      const progress = easeInOutQuad(timeElapsed, 0, distance, duration);
      window.scrollTo(0, window.pageYOffset + progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animate);
  });
}




function heroSlider() {
  const container = document.querySelector('.hero');
  if (!container) {
    return null;
  }

  const swiper = new Swiper('.hero__slider', {
    slidesPerView: "auto",
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 6500,
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

  });
}

heroSlider();



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    document.querySelector('body').classList.add('locked')
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
    document.querySelector('body').classList.remove('locked')
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
    document.querySelector('body').classList.remove('locked')
  }
});


AOS.init();


/*    куки    */

document.addEventListener("DOMContentLoaded", function () {
  const cookies = document.querySelector('.cookies');
  const acceptBtn = document.querySelector('.cookies__btn');

  acceptBtn.addEventListener('click', function () {
    // Set cookie to expire in 30 days
    const date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "cookieAccepted=true;" + expires + ";path=/";

    // Hide the cookies notification
    cookies.style.display = 'none';
  });

  // Check if the cookie is already set
  if (document.cookie.includes('cookieAccepted=true')) {
    cookies.style.display = 'none';
  } else {
    // Show the cookies notification if the cookie is not set
    cookies.style.display = 'block';
  }
});
