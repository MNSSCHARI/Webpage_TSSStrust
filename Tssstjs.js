// ===================================
// Fixed Header on Scroll
// ===================================
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('#fixedHeader').addClass('visible');
    } else {
        $('#fixedHeader').removeClass('visible');
    }
});

// ===================================
// Slick Carousel Initialization
// ===================================
$(document).ready(function () {
    $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: true,
        dots: true,
        arrows: true,
        speed: 500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});

// ===================================
// Popup Functionality
// ===================================
window.onload = function () {
    var overlay = document.getElementById('overlay');
    var popup1 = document.getElementById('popupAd1');

    if (overlay && popup1) {
        overlay.style.display = 'block';
        popup1.style.display = 'block';
        setTimeout(function () {
            popup1.classList.add('show');
        }, 100);
    }
};

function closePopup(popupNumber) {
    var currentPopup = document.getElementById('popupAd' + popupNumber);

    if (currentPopup) {
        currentPopup.classList.remove('show');

        setTimeout(function () {
            currentPopup.style.display = 'none';

            var nextPopupNumber = popupNumber + 1;
            var nextPopup = document.getElementById('popupAd' + nextPopupNumber);

            if (nextPopup) {
                nextPopup.style.display = 'block';
                setTimeout(function () {
                    nextPopup.classList.add('show');
                }, 100);
            } else {
                var overlay = document.getElementById('overlay');
                if (overlay) {
                    overlay.style.display = 'none';
                }
            }
        }, 500);
    }
}

// ===================================
// Mobile Menu Toggle
// ===================================
function toggleMenu() {
    var mainNav = document.getElementById('mainNav');
    var fixedNav = document.getElementById('fixedNav');

    if (mainNav) {
        mainNav.classList.toggle('active');
    }
    if (fixedNav) {
        fixedNav.classList.toggle('active');
    }
}

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                var mainNav = document.getElementById('mainNav');
                var fixedNav = document.getElementById('fixedNav');
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
                if (fixedNav && fixedNav.classList.contains('active')) {
                    fixedNav.classList.remove('active');
                }
            }
        });
    });
});

// ===================================
// Close mobile menu when clicking outside
// ===================================
document.addEventListener('click', function (event) {
    var mainNav = document.getElementById('mainNav');
    var fixedNav = document.getElementById('fixedNav');
    var toggleButton = document.querySelector('.mobile-menu-toggle');

    if (mainNav && !mainNav.contains(event.target) && !toggleButton.contains(event.target)) {
        mainNav.classList.remove('active');
    }
    if (fixedNav && !fixedNav.contains(event.target) && !toggleButton.contains(event.target)) {
        fixedNav.classList.remove('active');
    }
});