// ===================================
// Gallery Filter Functionality
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    // Add fade in animation
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hidden');
                        item.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
});

// ===================================
// Lightbox Functionality
// ===================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let visibleImages = [];

// Open lightbox when clicking on gallery item
document.addEventListener('click', function(e) {
    if (e.target.closest('.gallery-item') && !e.target.closest('.gallery-item').classList.contains('hidden')) {
        const galleryItem = e.target.closest('.gallery-item');
        const img = galleryItem.querySelector('img');
        const title = galleryItem.querySelector('h3').textContent;
        const subtitle = galleryItem.querySelector('p').textContent;
        
        // Get all visible images
        visibleImages = Array.from(document.querySelectorAll('.gallery-item:not(.hidden)'));
        currentImageIndex = visibleImages.indexOf(galleryItem);
        
        openLightbox(img.src, `${title} - ${subtitle}`);
    }
});

function openLightbox(src, caption) {
    lightbox.style.display = 'block';
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close lightbox
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        closeLightbox();
    }
});

// Previous image
prevBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
    showImage(currentImageIndex);
});

// Next image
nextBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
    showImage(currentImageIndex);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    }
});

function showImage(index) {
    const galleryItem = visibleImages[index];
    const img = galleryItem.querySelector('img');
    const title = galleryItem.querySelector('h3').textContent;
    const subtitle = galleryItem.querySelector('p').textContent;
    
    lightboxImg.src = img.src;
    lightboxCaption.textContent = `${title} - ${subtitle}`;
}

// ===================================
// Lazy Loading for Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.gallery-item img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Mobile Menu Toggle (from main JS)
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

// Fixed Header on Scroll
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('#fixedHeader').addClass('visible');
    } else {
        $('#fixedHeader').removeClass('visible');
    }
});