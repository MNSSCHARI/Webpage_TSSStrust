$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) { // Adjust the scroll position as needed
        $('#fixedHeader').addClass('visible');
    } else {
        $('#fixedHeader').removeClass('visible');
    }
});





$(document).ready(function(){
    var slick = $('.slick-carousel');
  
    // Initialize Slick carousel
    slick.slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: true, // Enable infinite looping
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000, // Autoplay speed in milliseconds
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
  
    // Automatic movement to center every 3 seconds
    setInterval(function() {
        var centerSlideIndex = slick.slick('slickCurrentSlide');
        var totalSlides = slick.slick('getSlick').slideCount;
  
        // Move to the next slide in sequence
        var nextIndex = (centerSlideIndex + 1) % totalSlides;
        slick.slick('slickGoTo', nextIndex);
    }, 3000); // Adjust the interval as needed (in milliseconds)
  
    // Click event to center slide
    $(document).on('click', '.slick-slide', function() {
        var index = $(this).data('slick-index');
        slick.slick('slickGoTo', index);
    });
  });
  
//   function of pop up notification
// new fetaure pop up window

window.onload = function() {
    var overlay = document.getElementById('overlay');
    var popup1 = document.getElementById('popupAd1');
    var popup2 = document.getElementById('popupAd2');
    overlay.style.display = 'block';
    popup1.style.display = 'block';
    setTimeout(function() {
        popup1.classList.add('show');
    }, 100);
};

function closePopup(popupNumber) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popupAd' + popupNumber);
    popup.classList.remove('show');
    setTimeout(function() {
        popup.style.display = 'none';
        if (popupNumber === 1) {
            var nextPopup = document.getElementById('popupAd2');
            nextPopup.style.display = 'block';
            setTimeout(function() {
                nextPopup.classList.add('show');
            }, 100);
        } else {
            overlay.style.display = 'none';
        }
    }, 500);
}
