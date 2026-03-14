/* ============================================
   THE GRILL HOUSE - JavaScript
   Premium Dark Theme Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initScrollAnimations();
    initMobileNav();
    initSmoothScroll();
    initReservationForm();
    initDateInput();
});

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        animatedElements.forEach(element => {
            element.classList.add('active');
        });
    }
}

/* ============================================
   MOBILE NAVIGATION
   ============================================ */
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   DATE INPUT - SET MIN DATE TO TODAY
   ============================================ */
function initDateInput() {
    const dateInput = document.getElementById('date');

    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

/* ============================================
   WHATSAPP ORDER INTEGRATION
   ============================================ */
function orderViaWhatsApp(dishName, price) {
    const phoneNumber = '+2348030685948';
    const message = encodeURIComponent(
        `Hello The Grill House,\n\nI'd like to order:\n` +
        `- Dish: ${dishName}\n` +
        `- Price: ${price}\n\n` +
        `Please confirm availability.`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

/* ============================================
   RESERVATION FORM
   ============================================ */
function initReservationForm() {
    const form = document.getElementById('reservationForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const date = formData.get('date');
            const time = formData.get('time');
            const guests = formData.get('guests');
            const occasion = formData.get('occasion') || 'None';
            const special = formData.get('special') || 'None';

            const phoneNumber = '+2348030685948';
            const message = encodeURIComponent(
                `🌙 THE GRILL HOUSE - RESERVATION REQUEST\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                `👤 Name: ${name}\n` +
                `📞 Phone: ${phone}\n` +
                `📅 Date: ${date}\n` +
                `🕐 Time: ${time}\n` +
                `👥 Guests: ${guests}\n` +
                `🎉 Occasion: ${occasion}\n` +
                `📝 Special Requests: ${special}\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `Please confirm my reservation. Thank you!`
            );

            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

            // Reset form after submission
            form.reset();
        });
    }
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   PARALLAX EFFECT FOR HERO
   ============================================ */
window.addEventListener('scroll', throttle(function() {
    const scrolled = window.pageYOffset;
    const heroLight = document.querySelector('.hero-light');

    if (heroLight && scrolled < window.innerHeight) {
        heroLight.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.3}px)`;
    }
}, 10));

/* ============================================
   ACTIVE NAVIGATION HIGHLIGHT
   ============================================ */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', throttle(function() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, 100));

/* ============================================
   CURSOR EFFECT (Optional)
   ============================================ */
// Uncomment below for custom cursor effect
/*
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
*/

/* ============================================
   LOADING STATE
   ============================================ */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');

    // Trigger hero animations
    setTimeout(() => {
        document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta, .hero-badge').forEach(el => {
            el.classList.add('active');
        });
    }, 100);
});

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */

// Handle keyboard navigation for mobile menu
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.getElementById('navToggle');

        if (navLinks && navLinks.classList.contains('active')) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Add focus-visible styles for keyboard navigation
document.addEventListener('keyup', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

/* ============================================
   PWA / OFFLINE SUPPORT (Optional)
   ============================================ */
// Register service worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js');
    });
}