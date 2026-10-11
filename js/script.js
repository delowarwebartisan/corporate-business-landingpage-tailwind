// ========================================
// MENU DROPDOWN JS
// ========================================

let service_menu = document.querySelector("#services-menu");
let service_btn = document.querySelector("#services-btn");
let service_dropdown = document.querySelector("#services-dropdown");

let clicked = false;

if (service_menu && service_btn && service_dropdown) {

    service_btn.addEventListener("click", function (event) {

        event.stopPropagation();

        clicked = !clicked;

        if (clicked) {
            service_dropdown.classList.remove("hidden");
        } else {
            service_dropdown.classList.add("hidden");
        }

    });


    document.addEventListener("click", function (event) {

        if (!service_menu.contains(event.target)) {

            clicked = false;

            service_dropdown.classList.add("hidden");

        }

    });

}


// ========================================
// MOBILE SERVICE DROPDOWN
// ========================================

let mobile_menu = document.querySelector("#mobile_menu");
let service_btn2 = document.querySelector("#services-btn2");
let service_dropdown2 = document.querySelector("#services-dropdown2");

let clicked2 = false;

if (mobile_menu && service_btn2 && service_dropdown2) {

    service_btn2.addEventListener("click", function (event) {

        event.stopPropagation();

        clicked2 = !clicked2;

        if (clicked2) {

            service_dropdown2.classList.remove("hidden");

        } else {

            service_dropdown2.classList.add("hidden");

        }

    });


    document.addEventListener("click", function (event) {

        if (!mobile_menu.contains(event.target)) {

            clicked2 = false;

            service_dropdown2.classList.add("hidden");

        }

    });

}


// ========================================
// RESPONSIVE MOBILE MENU
// ========================================

let menu_item = document.querySelector("#mobile_menu");
let mobile_menu_btn = document.querySelector("#mobile_menu_btn");

if (menu_item && mobile_menu_btn) {

    mobile_menu_btn.addEventListener("click", function () {

        menu_item.classList.toggle("hidden");

    });

}


// ========================================
// SWIPER
// ========================================

const swiper = new Swiper(".mySwiper", {

    spaceBetween: 20,

    slidesPerView: 1,


    // ==============================
    // RESPONSIVE
    // ==============================

    breakpoints: {

        // Tablet
        640: {
            slidesPerView: 2,
        },

        // Desktop
        1024: {
            slidesPerView: 3,
        },

    },


    // ==============================
    // NAVIGATION
    // ==============================

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },


    // ==============================
    // PAGINATION
    // ==============================

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

});

   // ==============================
    // Pack codeing
    // ==============================
let yearly_btn=document.querySelector('#yearly_btn');
let yearly_pack=document.querySelector('#yearly_pack');
let monthly_btn=document.querySelector('#monthly_btn');
let monthly_pack=document.querySelector('#monthly_pack');

monthly_btn.addEventListener('click',function(){
    yearly_pack.classList.add('hidden');
    monthly_pack.classList.remove('hidden');
    monthly_btn.classList.add('bg-green-500','text-white');
    monthly_btn.classList.remove('bg-white','text-black');
    yearly_btn.classList.remove('bg-green-500','text-white');
    yearly_btn.classList.add('bg-white','text-black');
});
yearly_btn.addEventListener('click',function(){
    monthly_pack.classList.add('hidden');
    yearly_pack.classList.remove('hidden');
    yearly_btn.classList.add('bg-green-500','text-white');
    yearly_btn.classList.remove('bg-white');
    monthly_btn.classList.remove('bg-green-500','text-white');
    monthly_btn.classList.add('bg-white','text-black');
});


// slide review
const slides = document.querySelectorAll('.custom-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove('hidden');
      setTimeout(() => {
        slide.classList.remove('opacity-0');
        slide.classList.add('opacity-100');
      }, 20);
    } else {
      slide.classList.remove('opacity-100');
      slide.classList.add('opacity-0');
      slide.classList.add('hidden');
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});


// aos js code
AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });