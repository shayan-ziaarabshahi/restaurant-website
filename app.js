let loader = document.getElementById('loaderContainer')
setTimeout(() => loader.style.display = "none", 5000)

let menuIcon = document.getElementById("menuIcon");
let menuIconInner = document.getElementById("menuIconInner");
let nav = document.getElementsByTagName("nav")[0];
let searchIcon = document.getElementById("searchIcon");
let searchSection = document.getElementById("search-section");
let searchCross = document.getElementById("search-cross");

menuIcon.addEventListener('click', () => {
    menuIconInner.classList.toggle("fa-times")
    nav.classList.toggle("active")
})

searchIcon.addEventListener('click', () => {
    searchSection.style.top = '0'
})

searchCross.addEventListener('click', () => {
    searchSection.style.top = '-110%'
})


let swiper1 = new Swiper('.swiper1', {

    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlice: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 2500,
    }
});

let swiper2 = new Swiper('.swiper2', {

    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlice: true,

    autoplay: {
        delay: 2500,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    }
});

let sections = Array.from(document.getElementsByTagName('section'));

window.addEventListener('scroll', () => {

    sections.forEach(section => {
        if (section.offsetTop + section.offsetHeight >= window.scrollY + 50 && window.scrollY + 50 >= section.offsetTop) {

            if (!document.getElementById('n' + section.id).classList.contains('activeNav')) {
                document.getElementById('n' + section.id).classList.add('activeNav')
            }
        } else {
            if (document.getElementById('n' + section.id).classList.contains('activeNav')) {
                document.getElementById('n' + section.id).classList.remove('activeNav')
            }
        }
    })
})




